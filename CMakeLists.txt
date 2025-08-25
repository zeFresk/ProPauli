cmake_minimum_required(VERSION 3.14)
set(CMAKE_VERBOSE_MAKEFILE OFF CACHE BOOL "Explicit Makefile")
set(COVERAGE OFF CACHE BOOL "Build for coverage")
set(SANITIZE OFF CACHE BOOL "Build with sanitizers")
set(BENCHMARK OFF CACHE BOOL "Build benchmarks")
set(TEST OFF CACHE BOOL "Build tests")

project(ProPauli
	VERSION 2.0.0
DESCRIPTION "Fast and efficient C++ library for Pauli Propagation"
	LANGUAGES CXX)

# Build types
set(default_build_type "Debug")
if(NOT CMAKE_BUILD_TYPE AND NOT CMAKE_CONFIGURATION_TYPES)
	message(STATUS "Setting build type to '${default_build_type}' as none was specified.")
	set(CMAKE_BUILD_TYPE "${default_build_type}" CACHE
						STRING "Choose the type of build." FORCE)
	# Set the possible values of build type for cmake-gui
	set_property(CACHE CMAKE_BUILD_TYPE PROPERTY STRINGS
				"Debug" "Release")
endif()

if (NOT(CMAKE_CXX_COMPILER_ID MATCHES "Clang"))
	if (CMAKE_BUILD_TYPE STREQUAL "Debug")
		message(WARNING "Please prefer llvm clang compiler when running debug builds. Use '-D CMAKE_CXX_COMPILER=clang++'")
	endif()
elseif(NOT (CMAKE_CXX_COMPILER MATCHES "clang\\+\\+"))
	message(WARNING "Using clang instead of clang++ can cause link errors with sanitizers, please use clang++ instead.")
endif()

#setting includes and sources
set(INCLUDE_DIR "${PROJECT_SOURCE_DIR}/include")
set(SRC_DIR "${PROJECT_SOURCE_DIR}/src")
file(GLOB SOURCES "${SRC_DIR}/*.cpp")
list(FILTER SOURCES EXCLUDE REGEX "[^/]+/main.cpp")

#creating library
add_library(propaulib ${SOURCES})
target_include_directories(propaulib PUBLIC ${INCLUDE_DIR})

#Setting C++ flags
target_compile_features(propaulib PUBLIC cxx_std_23)
target_compile_options(propaulib PUBLIC
	$<$<CXX_COMPILER_ID:MSVC>:/W4>
	$<$<CXX_COMPILER_ID:Clang,GNU>:-Wall -Wextra -Wpedantic>
										#$<$<CXX_COMPILER_ID:Clang>:-stdlib=libc++>
	$<$<AND:$<CONFIG:Release>,$<CXX_COMPILER_ID:MSVC>>:/O2>
	$<$<AND:$<CONFIG:Release>,$<NOT:$<CXX_COMPILER_ID:MSVC>>>:-O3 -march=native -g>
	$<$<AND:$<CONFIG:Release>,$<CXX_COMPILER_ID:Clang>>:-ffast-math>
	$<$<CONFIG:Debug>:-g>
	$<$<AND:$<CONFIG:Debug>,$<CXX_COMPILER_ID:Clang>,$<BOOL:${SANITIZE}>>:-fsanitize=address -fno-omit-frame-pointer -fsanitize=undefined -fno-sanitize=vptr>
	$<$<AND:$<BOOL:${COVERAGE}>,$<CXX_COMPILER_ID:GNU>>:-ftest-coverage -fprofile-arcs>
	$<$<AND:$<BOOL:${COVERAGE}>,$<CXX_COMPILER_ID:Clang>>:-fprofile-instr-generate -fcoverage-mapping --coverage>
	)

target_link_options(propaulib INTERFACE
	$<$<AND:$<CONFIG:Debug>,$<CXX_COMPILER_ID:Clang>,$<BOOL:${SANITIZE}>>:-fsanitize=address -fsanitize=undefined -fno-sanitize=vptr>
	$<$<AND:$<BOOL:${COVERAGE}>,$<NOT:$<CXX_COMPILER_ID:MSVC>>>:-fprofile-instr-generate --coverage>
										#$<$<CXX_COMPILER_ID:Clang>:-fuse-ld=lld>
	)

include(FetchContent)
FetchContent_Declare(
	robin-map
	GIT_REPOSITORY https://github.com/Tessil/robin-map
	GIT_TAG v1.4.0
)
FetchContent_MakeAvailable(robin-map)
target_link_libraries(propaulib tsl::robin_map)

if (TEST)
	# Build de GTest
	include(FetchContent)
	FetchContent_Declare(
		googletest
										# Specify the commit you depend on and update it regularly.
		URL https://github.com/google/googletest/archive/52eb8108c5bdec04579160ae17225d66034bd723.zip
		DOWNLOAD_EXTRACT_TIMESTAMP true
)
	# For Windows: Prevent overriding the parent project's compiler/linker settings
	set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)
	FetchContent_MakeAvailable(googletest)

	#set(CMAKE_CXX_FLAGS "-std=c++20 -stdlib=libc++")

	enable_testing()
	include(GoogleTest)
	file(GLOB TESTS_SRC "${PROJECT_SOURCE_DIR}/tests/*.cpp" "${PROJECT_SOURCE_DIR}/tests/*/*.cpp")
	add_executable(UnitTest ${TESTS_SRC})
	target_link_libraries(UnitTest propaulib gtest gtest_main gmock)
	target_include_directories(UnitTest PUBLIC ${INCLUDE_DIR})
	gtest_discover_tests(UnitTest)
endif()

# GoogleBenchmark
if (BENCHMARK)
	include(FetchContent)
	FetchContent_Declare(
		googlebenchmark
		URL https://github.com/google/benchmark/archive/refs/tags/v1.9.4.zip
				DOWNLOAD_EXTRACT_TIMESTAMP true
	)
	set(BENCHMARK_ENABLE_TESTING OFF CACHE BOOL "Disable testing for Google Benchmark")
	FetchContent_MakeAvailable(googlebenchmark)
	file(GLOB BENCH_SRC "${PROJECT_SOURCE_DIR}/benchmarks/*.cpp")
	add_executable(Benchmarks ${BENCH_SRC})
	target_link_libraries(Benchmarks propaulib benchmark::benchmark benchmark::benchmark_main)
	target_include_directories(Benchmarks PRIVATE "${PROJECT_SOURCE_DIR}/benchmarks/")
endif()

# coverage
if (COVERAGE)
	if (NOT TEST)
		message(FATAL_ERROR "Can't build coverage report without tests")
	endif()
	set(TARGET_NAME UnitTest)

	target_compile_options(UnitTest PUBLIC
	$<$<AND:$<BOOL:${COVERAGE}>,$<CXX_COMPILER_ID:GNU>>:-ftest-coverage -fprofile-arcs -O0 -g>
	$<$<AND:$<BOOL:${COVERAGE}>,$<CXX_COMPILER_ID:Clang>>:-fprofile-instr-generate -fcoverage-mapping --coverage -O0 -g>
	)

	target_link_options(UnitTest PUBLIC
	$<$<AND:$<BOOL:${COVERAGE}>,$<NOT:$<CXX_COMPILER_ID:MSVC>>>:-fprofile-instr-generate --coverage>
	)

	if (CMAKE_CXX_COMPILER_ID MATCHES "Clang")

		add_custom_target(coverage
					COMMAND LLVM_PROFILE_FILE=${TARGET_NAME}.profraw $<TARGET_FILE:${TARGET_NAME}>
					COMMAND llvm-profdata merge -sparse ${TARGET_NAME}.profraw -o ${TARGET_NAME}.profdata
					COMMAND llvm-cov report $<TARGET_FILE:${TARGET_NAME}> -instr-profile=${TARGET_NAME}.profdata
					DEPENDS ${TARGET_NAME}
	)
	elseif(CMAKE_COMPILER_IS_GNUCXX)
		add_custom_target(coverage
			COMMAND $<TARGET_FILE:${TARGET_NAME}>
			COMMAND lcov --coverage --directory . --output-file coverage.info
			COMMAND genhtml main_coverage.info --output-directory coverage_html
		)
	else()
		message(FATAL_ERROR "Code coverage requires Clang or GCC. Aborting.")
	endif()
endif()

#doc
if (DOCUMENTATION)
	add_subdirectory(doc)
endif()

#configure_file(
#	"${SRC_DIR}/config.h.in"
#	"${INCLUDE_DIR}/config.h"
#	@ONLY
#	)
