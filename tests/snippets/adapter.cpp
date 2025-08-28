#include "adapter.hpp"
#include <iostream>
#include <string>
#include <vector>
#include <numeric>

//! [adapter_it_usage]
// A simple struct that can be constructed from an int
struct NumberString {
    std::string data;
    explicit NumberString(int val) : data("Number: " + std::to_string(val)) {}
};
//! [adapter_it_usage]

void adapter_it_snippets() {
    //! [adapter_it_usage]
    // Create a vector of integers.
    std::vector<int> numbers = {10, 20, 30, 40, 50};

    // Create AdapterIt begin and end iterators.
    // This will adapt `std::vector<int>::iterator` to an iterator that
    // yields `NumberString` objects on-the-fly.
    AdapterIt<NumberString, decltype(numbers.begin())> begin(numbers.begin());
    AdapterIt<NumberString, decltype(numbers.end())> end(numbers.end());

    // Iterate using the adapter. The conversion from `int` to `NumberString`
    // happens lazily inside the loop upon dereference.
    std::cout << "Using AdapterIt to convert ints to NumberStrings:\n";
    for (auto it = begin; it != end; ++it) {
        // `*it` triggers the conversion from int to NumberString
        std::cout << it->data << std::endl;
    }
    //! [adapter_it_usage]
}

