.. _api_reference:

#############
API Reference
#############

This documentation is divided into two main parts: a **High-Level API** for general usage and an **Advanced & Technical API** for developers interested in the library's internal workings.

*****************
High-Level API
*****************

This section covers the primary classes needed to build, configure, and run a simulation.

Simulation Control
==================
The main user-facing classes for constructing and simulating a quantum circuit.

.. doxygenclass:: Circuit
   :members:

.. doxygenclass:: NoiseModel
   :members:

--------------------

Primary Data Structures
=======================
The fundamental classes for representing the quantum state and its components.

.. doxygenclass:: Observable
   :members:

.. doxygenclass:: PauliTerm
   :members:

*************************
Advanced & Technical API
*************************

This section details the lower-level, performance-oriented components for developers and advanced users.

Performance-Oriented Container
==============================
The specialized container that provides the efficient, bit-packed backend for the ``Observable`` class.

.. doxygenclass:: PauliTermContainer
   :members:

.. note::
   Using ``:members:`` on ``PauliTermContainer`` will automatically document its important nested classes, including the **packed non-owning views** (``ReadOnlyNonOwningPauliTermPacked``, ``NonOwningPauliTermPacked``) and the **iterators** (``ReadOnlyNonOwningIterator``, ``NonOwningIterator``).

--------------------

Non-Owning View Classes
=======================
Lightweight views for manipulating ``PauliTerm`` data without incurring copy overhead. These are the conceptual counterparts to the packed views.

.. doxygenclass:: ReadOnlyNonOwningPauliTerm
   :members:

.. doxygenclass:: NonOwningPauliTerm
   :members:

--------------------

Algorithms & Utilities
======================
Key algorithms and low-level helper functions used throughout the library.

.. doxygenfunction:: merge_inplace_noalloc

.. doxygenfile:: bit_operations.hpp

.. doxygenfile:: adapter.hpp

********************
Truncation Framework
********************

A collection of classes for truncating observables to manage simulation complexity.

Base Class
==========
.. doxygenclass:: Truncator
   :members:

--------------------

Provided Truncators
===================
.. doxygentypedef:: CoefficientTruncator
.. doxygentypedef:: WeightTruncator
