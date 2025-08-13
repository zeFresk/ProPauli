.. _getting_started:

Getting Started
===============

This guide will walk you through installing ProPauli and running your first simulation.

Installation
------------

To use ProPauli, you will need a C++23 compatible compiler (**Clang** is preferred) and **CMake 3.14** or later.

You can build the library from source with the following commands:

.. code-block:: bash

   git clone https://github.com/zefresk/ProPauli.git
   cd ProPauli
   cmake -S . -B build -D CMAKE_BUILD_TYPE=Release
   cmake --build build --config Release

This will build the ProPauli library, which you can then link against in your own projects.

Quickstart: Your First Simulation
---------------------------------

Let's simulate a simple 8-qubit quantum circuit. This circuit first applies a Hadamard gate to every qubit to create a superposition, then entangles them with a chain of CNOT gates. Finally, we will calculate the expectation value of the :math:`Z^{\otimes 8}` observable.

.. literalinclude:: ../tests/snippets/quickstart.cpp
   :language: cpp
   :start-after: //! [quickstart]
   :end-before: //! [quickstart]

This example demonstrates the complete workflow: initializing a ``Circuit``, adding operations, defining an ``Observable``, running the simulation, and retrieving the final expectation value.

Examples from the README
------------------------

Here are the examples from the README, providing a quick overview of the library's main features.

**Basic Circuit**

A simple 2-qubit circuit calculating the expectation value of the "ZZ" observable.

.. literalinclude:: /../tests/snippets/circuit.cpp
   :language: cpp
   :start-after: //! [basic_circuit]
   :end-before: //! [basic_circuit]

**Large Circuit with Truncation**

This demonstrates a 64-qubit circuit that uses truncators to manage the complexity of the simulation. Terms with very small coefficients or a high number of non-identity Pauli operators (high Pauli weight) are removed.

.. literalinclude:: /../tests/snippets/circuit.cpp
   :language: cpp
   :start-after: //! [large_circuit_truncation]
   :end-before: //! [large_circuit_truncation]

**Custom Truncator**

Users can define their own truncation logic. The easiest way is by providing a lambda to the ``PredicateTruncator``.

.. literalinclude:: /../tests/snippets/circuit.cpp
   :language: cpp
   :start-after: //! [custom_truncator]
   :end-before: //! [custom_truncator]

**Noise Model**

This example shows how to define a simple noise model where 1% amplitude damping noise is applied after every CNOT gate.

.. literalinclude:: /../tests/snippets/circuit.cpp
   :language: cpp
   :start-after: //! [noise_model]
   :end-before: //! [noise_model]
