.. _circuit_guide:

Guide: Building Quantum Circuits
================================

The ``Circuit`` class is the primary high-level interface for constructing and simulating quantum circuits. This guide explores its features in detail, from basic gate application to advanced optimization with truncators and custom scheduling policies.

Basic Circuit Construction
--------------------------

A circuit is initialized with the number of qubits it will operate on. Gates are then added sequentially using the ``add_operation`` method.

.. literalinclude:: /../tests/snippets/quickstart.cpp
   :language: cpp
   :start-after: //! [quickstart]
   :end-before: //! [quickstart]

Managing Complexity with Truncators
-----------------------------------

As a simulation runs, especially with non-Clifford gates or noise, the number of terms in the ``Observable`` can grow exponentially. Truncators are essential tools for keeping the simulation tractable by removing terms that are unlikely to contribute significantly to the final expectation value.

ProPauli provides two built-in truncators:

* **CoefficientTruncator**: Removes terms whose coefficient has a magnitude below a specified threshold.
* **WeightTruncator**: Removes terms whose Pauli weight (the number of non-identity operators) is above a specified threshold.

They are passed to the ``Circuit`` constructor.

.. literalinclude:: /../tests/snippets/circuit.cpp
   :language: cpp
   :start-after: //! [large_circuit_truncation]
   :end-before: //! [large_circuit_truncation]


Creating a Custom Truncator
---------------------------

You can define custom truncation logic by creating a class that inherits from ``Truncator`` and implements the ``truncate`` method.

However, a more straightforward approach for simple predicates is to use the ``PredicateTruncator``, which takes any callable (like a lambda) that returns ``true`` for terms that should be removed.

.. literalinclude:: /../tests/snippets/circuit.cpp
   :language: cpp
   :start-after: //! [custom_truncator]
   :end-before: //! [custom_truncator]

Controlling Optimization with Scheduling Policies
-------------------------------------------------

Merging and truncating are powerful but can be computationally expensive. **Scheduling Policies** give you fine-grained control over *when* these optimizations are applied during the simulation.

The two main built-in policies are:

* **AlwaysAfterSplittingPolicy (Default)**: Applies the optimization (merge or truncate) immediately after a "splitting" gate (like Rz or Amplitude Damping) is applied. This is often a good default strategy.
* **NeverPolicy**: Disables the optimization entirely.

Policies are passed to the ``Circuit`` constructor.

.. literalinclude:: /../tests/snippets/scheduler.cpp
   :language: cpp
   :start-after: //! [scheduling_policy]
   :end-before: //! [scheduling_policy]

**Custom Scheduling Policies**

For advanced use cases, you can create your own policy by inheriting from ``SchedulingPolicy``. This allows you to implement complex logic based on the full simulation state.

For example, here is a policy that only merges Pauli terms after every second splitting gate:

.. literalinclude:: /../tests/snippets/custom_scheduler_guide.cpp
   :language: cpp
   :start-after: //! [custom_scheduler_class]
   :end-before: //! [custom_scheduler_class]

You would then use it in a circuit like this:

.. literalinclude:: /../tests/snippets/custom_scheduler_guide.cpp
   :language: cpp
   :start-after: //! [custom_scheduler_usage]
   :end-before: //! [custom_scheduler_usage]
