.. _symbolic_guide:

Guide: Symbolic Circuit Simulation
=================================

Beyond numeric simulation, the library offers powerful capabilities for symbolic circuit analysis. By using ``SymbolicCoefficient`` as the underlying data type, you can build circuits with variable parameters (e.g., rotation angles, noise probabilities). This allows you to analyze the circuit's behavior analytically without needing to re-run the entire simulation for each new parameter value.

Creating a Symbolic Circuit
---------------------------

To enable symbolic computation, instantiate your ``Circuit`` and ``Observable`` with ``SymbolicCoefficient<T>``, where ``T`` is a floating-point type like ``double`` or ``float``.

Gate parameters that are typically numeric can be replaced with a ``Variable`` object. The simulation will then propagate these variables through the circuit, resulting in an observable whose coefficients are symbolic expressions.

.. literalinclude:: /../tests/snippets/symbolic_guide.cpp
   :language: cpp
   :start-after: //! [symbolic_circuit]
   :end-before: //! [symbolic_circuit]

Working with Symbolic Results
-----------------------------

The expectation value of a symbolic observable is not a single number but a ``SymbolicCoefficient`` itself—an expression containing the variables you defined. You can manipulate this expression in several ways.

Full Evaluation
~~~~~~~~~~~~~~~

To get a final numeric result, you can perform a full evaluation by providing a value for every variable in the expression.

.. literalinclude:: /../tests/snippets/symbolic_guide.cpp
   :language: cpp
   :start-after: //! [full_evaluation]
   :end-before: //! [full_evaluation]

.. note::
   Calling ``.evaluate()`` on an expression with unbound variables will throw a ``std::invalid_argument`` exception.

Simplification
~~~~~~~~~~~~~~

As operations are applied, symbolic expressions can become unwieldy (e.g., ``((2 * x) + (3 * x))``). The ``.simplified()`` method performs algebraic simplification to produce a more compact and canonical form (e.g., ``5 * x``). This is useful for both analysis and for speeding up subsequent evaluations.

.. literalinclude:: /../tests/snippets/symbolic_guide.cpp
   :language: cpp
   :start-after: //! [simplification]
   :end-before: //! [simplification]

Partial Evaluation (Symbolic Evaluation)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In some cases, you may know the values of some parameters but want to keep others symbolic. The ``.symbolic_evaluate()`` method substitutes the known values and simplifies the resulting expression, returning a new, partially evaluated ``SymbolicCoefficient``.

This is particularly useful when you want to pre-calculate parts of a complex expression to optimize repeated evaluations where only a subset of parameters change.

.. literalinclude:: /../tests/snippets/symbolic_guide.cpp
   :language: cpp
   :start-after: //! [partial_evaluation]
   :end-before: //! [partial_evaluation]
