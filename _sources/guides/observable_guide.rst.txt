.. _observable_guide:

Guide: Using the Observable Primitive
=====================================

While the ``Circuit`` class provides a convenient high-level interface, you can also work directly with the ``Observable`` primitive for maximum control. This is useful for algorithm development, debugging, or when integrating ProPauli into other simulation frameworks.

The Heisenberg Picture
----------------------

ProPauli works in the **Heisenberg picture**, where the quantum state is considered fixed (as the :math:`|0\rangle^{\otimes n}` state) and the operators (observables) evolve. When we apply a gate :math:`U` to a circuit, the corresponding transformation on an observable :math:`O` is :math:`O \rightarrow U^\dagger O U`.

Because we build the circuit forward but evolve the observable backward, the operations are applied in reverse order. For a circuit :math:`U = U_k \dots U_2 U_1`, the final observable :math:`O'` is calculated as:

.. math::

   O' = (U_1^\dagger U_2^\dagger \dots U_k^\dagger) O (U_k \dots U_2 U_1)

The ``apply_*`` methods on the ``Observable`` class each compute one of these :math:`U_i^\dagger O U_i` steps.

Manual Evolution Example
------------------------

Let's manually evolve an observable through a simple two-qubit circuit that prepares a Bell state. The forward circuit is ``H`` on qubit 0, followed by ``CX`` with control 1 and target 0.

.. literalinclude:: /../tests/snippets/observable_guide.cpp
   :language: cpp
   :start-after: //! [observable_manual_evolution]
   :end-before: //! [observable_manual_evolution]

The final observable is ``XX``. Its expectation value on the initial :math:`|00\rangle` state is 0.

Splitting, Merging, and Truncating
----------------------------------

When working directly with an observable, you are responsible for managing its complexity.

**Splitting** occurs when applying non-Clifford gates like ``apply_rz``. An observable that was a single Pauli term can become a sum of two terms.

.. literalinclude:: /../tests/snippets/observable_guide.cpp
   :language: cpp
   :start-after: //! [observable_splitting]
   :end-before: //! [observable_splitting]

After several splitting operations, you will likely have many identical Pauli strings with different coefficients. You are responsible for calling ``merge()`` to combine them and ``truncate()`` to remove negligible terms.

.. literalinclude:: /../tests/snippets/observable_guide.cpp
   :language: cpp
   :start-after: //! [observable_merge_truncate]
   :end-before: //! [observable_merge_truncate]
