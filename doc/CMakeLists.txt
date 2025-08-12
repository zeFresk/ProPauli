# Find dependencies
find_package(Doxygen REQUIRED)
find_package(Python3 COMPONENTS Interpreter REQUIRED)
find_program(SPHINX_EXECUTABLE sphinx-build HINTS ${Python3_BIN_DIR})

if(NOT SPHINX_EXECUTABLE)
	message(FATAL_ERROR "Sphinx executable 'sphinx-build' not found.")
endif()

# --- Define Paths ---
set(DOXYGEN_INPUT_DIR "${PROJECT_SOURCE_DIR}/include")
set(DOXYGEN_OUTPUT_DIR "${CMAKE_CURRENT_BINARY_DIR}/doxygen")
set(DOXYGEN_XML_DIR "${DOXYGEN_OUTPUT_DIR}/xml")
set(SPHINX_BUILD_DIR "${CMAKE_CURRENT_BINARY_DIR}")
set(SPHINX_SOURCE_DIR "${CMAKE_CURRENT_SOURCE_DIR}")
set(SPHINX_OUTPUT_DIR "${CMAKE_CURRENT_BINARY_DIR}/html")

# --- Configure Templates ---
# This command replaces @VAR@ placeholders and writes the output files
# (Doxyfile and conf.py) into the Sphinx build directory.
configure_file(Doxyfile.in "${SPHINX_SOURCE_DIR}/Doxyfile" @ONLY)
configure_file(conf.py.in "${SPHINX_SOURCE_DIR}/conf.py" @ONLY)

# --- Doxygen Target ---
# This target runs Doxygen from the build directory, where the configured Doxyfile is located.
add_custom_target(DoxygenBuild
				COMMAND ${DOXYGEN_EXECUTABLE} "${SPHINX_BUILD_DIR}/Doxyfile"
				WORKING_DIRECTORY ${SPHINX_BUILD_DIR}
				COMMENT "Generating Doxygen XML..."
				VERBATIM
)

# --- Sphinx Target ---
add_custom_command(
				OUTPUT "${SPHINX_OUTPUT_DIR}/index.html"
				# Command: sphinx-build [options] <source_dir> <output_dir>
				# <source_dir> is your 'doc' directory with .rst files.
				# <output_dir> is where the final HTML goes.
				COMMAND ${SPHINX_EXECUTABLE} -b html "${SPHINX_SOURCE_DIR}" "${SPHINX_OUTPUT_DIR}"
				# The working directory for Sphinx MUST be where the configured `conf.py` is.
				# This is the key change that fixes the error.
				WORKING_DIRECTORY ${SPHINX_BUILD_DIR}
				DEPENDS DoxygenBuild
				COMMENT "Generating Sphinx HTML documentation..."
				VERBATIM
)

# --- Main 'doc' Target ---
# This target name 'doc' should match what you use in the root CMakeLists.txt
# e.g., `make doc` or `cmake --build . --target doc`
add_custom_target(doc ALL
				DEPENDS "${SPHINX_OUTPUT_DIR}/index.html"
)
