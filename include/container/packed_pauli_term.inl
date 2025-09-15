/**
 * @brief A lightweight, read-only, non-owning view of a single packed Pauli term.
 *
 * This class provides a `const` view of a Pauli term stored within a `PauliTermContainer`.
 * It does not store the Pauli string or coefficient itself, but rather holds a reference
 * to the container and an index to the term. All operations are delegated to the
 * parent container, often using highly optimized "fast" methods that operate
 * directly on the packed bit representation.
 */
class ReadOnlyNonOwningPauliTermPacked {
    protected:
	/// @brief A const reference to the parent container that owns the data.
	std::reference_wrapper<const PauliTermContainer<T, Underlying>> ptc;
	/// @brief The index of the term this view refers to within the container.
	std::size_t idx;

    public:
	/**
	 * @brief Constructs a read-only view.
	 * @param ptc_ The parent container.
	 * @param index The index of the term to view.
	 */
	ReadOnlyNonOwningPauliTermPacked(PauliTermContainer<T, Underlying> const& ptc_, std::size_t index) : ptc(ptc_), idx(index) {}

	/**
	 * @brief Calculates the expectation value of the term.
	 * @return The coefficient if the term is diagonal in the Z-basis (contains only I/Z), otherwise 0.
	 */
	T expectation_value() const {
		for (std::size_t i = 0; i < size(); ++i) {
			if (!get_pauli(i).commutes_with(p_z)) {
				return T{ 0 };
			}
		}
		return coefficient();
	}

	bool _is_dirty() const { return ptc.get().is_dirty(idx); }

	/** @name Accessors
	 * @{
	 */

	/** @brief Gets the Pauli operator for a specific qubit. */
	Pauli get_pauli(std::size_t qidx) const { return ptc.get().get_qubit(idx, qidx); }

	/** @brief Gets the number of qubits in the term. */
	decltype(auto) size() const { return ptc.get().nb_qubits(); }

	/** @brief Gets the coefficient of the term. */
	T coefficient() const noexcept { return ptc.get().get_coefficient(idx); }

	/**
	 * @brief Calculates the Pauli weight of the term.
	 * @note This is a high-performance operation that delegates to the container's `fast_pauli_weight` method.
	 */
	std::size_t pauli_weight() const noexcept { return ptc.get().fast_pauli_weight(idx); }
	/** @} */

	/**
	 * @brief Creates an owning `PauliTerm` copy from this view.
	 * @return A new `PauliTerm<T>` object.
	 * @note This is a potentially expensive operation as it requires unpacking the bit-packed
	 * Pauli string and allocating a new vector.
	 */
	explicit operator PauliTerm<T>() const {
		std::vector<Pauli> paulis;
		paulis.reserve(size());
		for (std::size_t i = 0; i < size(); ++i) {
			paulis.push_back(get_pauli(i));
		}
		return PauliTerm<T>{ paulis.begin(), paulis.end(), coefficient() };
	}

	/**
	 * @brief Computes a hash of the Pauli string part of the term.
	 * @note This is a high-performance operation that delegates to the container's `fast_phash` method.
	 */
	std::size_t phash() const noexcept { return ptc.get().fast_phash(idx); }

	/** @name Comparison
	 * @{
	 */

	/**
	 * @brief Checks for deep equality (Pauli string and coefficient) between two views.
	 */
	friend bool operator==(ReadOnlyNonOwningPauliTermPacked const& lhs, ReadOnlyNonOwningPauliTermPacked const& rhs) {
		return (lhs.size() == rhs.size()) && (lhs.coefficient() == rhs.coefficient()) && lhs.equal_bitstring(rhs);
	}

	/**
	 * @brief Checks for deep equality between a view and an owning `PauliTerm`.
	 */
	friend bool operator==(ReadOnlyNonOwningPauliTermPacked const& lhs, PauliTerm<T> const& rhs) {
		return static_cast<PauliTerm<T>>(lhs) == rhs;
	}

	/**
	 * @brief Checks for deep equality between an owning `PauliTerm` and a view.
	 */
	friend bool operator==(PauliTerm<T> const& lhs, ReadOnlyNonOwningPauliTermPacked const& rhs) { return rhs == lhs; }

	/**
	 * @brief Checks if the Pauli strings of two views are identical.
	 * @note This method has a fast path. If both views refer to the same parent container,
	 * it uses a highly optimized bitwise comparison. Otherwise, it performs a slower,
	 * element-by-element check.
	 */
	bool equal_bitstring(ReadOnlyNonOwningPauliTermPacked const& oth) const {
		return (&ptc.get() == &oth.ptc.get()) ? ptc.get().fast_equal_bitstring(idx, oth.idx) : slow_equal_bitstring(oth);
	}

	/**
	 * @brief Performs an element-by-element comparison of the Pauli string.
	 * @return `true` if the Pauli strings are identical.
	 * @note This is the fallback method for `equal_bitstring` when views point to different containers.
	 */
	bool slow_equal_bitstring(ReadOnlyNonOwningPauliTermPacked const& oth) const {
		if (oth.size() != size())
			return false;
		for (std::size_t i = 0; i < size(); ++i) {
			if (get_pauli(i) != oth.get_pauli(i)) {
				return false;
			}
		}
		return true;
	}
	/** @} */

	/**
	 * @brief Prints the term to an output stream.
	 */
	friend std::ostream& operator<<(std::ostream& os, ReadOnlyNonOwningPauliTermPacked const& pt) {
		os << std::showpos << pt.coefficient() << " ";
		for (std::size_t i = 0; i < pt.size(); ++i) {
			os << pt.get_pauli(i);
		}
		return os;
	}
};

/**
 * @brief A lightweight, mutable, non-owning view of a single packed Pauli term.
 *
 * This class provides a mutable view of a Pauli term stored within a `PauliTermContainer`.
 * It allows for both reading and in-place modification of the term's data. All operations,
 * including gate applications, are delegated to the parent container, leveraging its
 * performance-optimized methods that act directly on packed data.
 */
class NonOwningPauliTermPacked {
	/// @brief A reference to the parent container that owns the data.
	std::reference_wrapper<PauliTermContainer<T, Underlying>> ptc;
	/// @brief The index of the term this view refers to within the container.
	std::size_t idx;

    public:
	/**
	 * @brief Constructs a mutable view.
	 * @param ptc_ The parent container.
	 * @param index The index of the term to view.
	 */
	NonOwningPauliTermPacked(PauliTermContainer<T, Underlying>& ptc_, std::size_t index) : ptc(ptc_), idx(index) {}

	/**
	 * @brief Calculates the expectation value of the term.
	 * @return The coefficient if the term is diagonal in the Z-basis (contains only I/Z), otherwise 0.
	 */
	T expectation_value() const {
		for (std::size_t i = 0; i < ptc.get().nb_qubits(); ++i) {
			if (!get_pauli(i).commutes_with(p_z)) {
				return T{ 0 };
			}
		}
		return ptc.get().get_coefficient(idx);
	}

	bool _is_dirty() const { return ptc.get().is_dirty(idx); }

	void _set_dirty(bool v) { return ptc.get().set_dirty(idx, v); }

	/** @name Accessors and Mutators
	 * @{
	 */
	/** @brief Gets the Pauli operator for a specific qubit. */
	Pauli get_pauli(std::size_t qidx) const { return ptc.get().get_qubit(idx, qidx); }

	/** @brief Sets the Pauli operator for a specific qubit. */
	void set_pauli(std::size_t qidx, Pauli p) { ptc.get().set_qubit(idx, qidx, p); }

	/** @brief Gets the number of qubits in the term. */
	decltype(auto) size() const { return ptc.get().nb_qubits(); }

	/** @brief Gets the coefficient of the term. */
	T coefficient() const noexcept { return ptc.get().get_coefficient(idx); }

	/** @brief Sets the coefficient of the term. */
	void set_coefficient(T coeff) { ptc.get().set_coefficient(idx, coeff); }

	/** @brief Adds a value to the term's coefficient. */
	void add_coeff(T coeff) { set_coefficient(coefficient() + coeff); }

	/**
	 * @brief Calculates the Pauli weight of the term.
	 * @note This is a high-performance operation that delegates to the container's `fast_pauli_weight` method.
	 */
	std::size_t pauli_weight() const noexcept { return ptc.get().fast_pauli_weight(idx); }
	/** @} */

	/**
	 * @brief Creates an owning `PauliTerm` copy from this view.
	 * @return A new `PauliTerm<T>` object.
	 * @note This is a potentially expensive operation.
	 */
	explicit operator PauliTerm<T>() const {
		std::vector<Pauli> paulis;
		paulis.reserve(size());
		for (std::size_t i = 0; i < size(); ++i) {
			paulis.push_back(get_pauli(i));
		}
		PauliTerm<T> ret{ paulis.begin(), paulis.end(), coefficient() };
		return ret;
	}

	/** @brief Implicitly converts a mutable view to a read-only view. */
	operator ReadOnlyNonOwningPauliTermPacked() const { return ReadOnlyNonOwningPauliTermPacked(ptc, idx); }

	/**
	 * @brief Computes a hash of the Pauli string part of the term.
	 * @note This is a high-performance operation that delegates to the container's `fast_phash` method.
	 */
	std::size_t phash() const noexcept { return ptc.get().fast_phash(idx); }

	/** @name Comparison
	 * @{
	 */
	friend bool operator==(NonOwningPauliTermPacked const& lhs, NonOwningPauliTermPacked const& rhs) {
		return (lhs.size() == rhs.size()) && (lhs.coefficient() == rhs.coefficient()) && lhs.equal_bitstring(rhs);
	}
	friend bool operator==(PauliTerm<T> const& lhs, NonOwningPauliTermPacked const& rhs) {
		return static_cast<PauliTerm<T>>(rhs) == lhs;
	}
	friend bool operator==(NonOwningPauliTermPacked const& lhs, PauliTerm<T> const& rhs) { return rhs == lhs; }
	bool equal_bitstring(NonOwningPauliTermPacked const& oth) const {
		return (&ptc.get() == &oth.ptc.get()) ? ptc.get().fast_equal_bitstring(idx, oth.idx) : slow_equal_bitstring(oth);
	}
	bool slow_equal_bitstring(NonOwningPauliTermPacked const& oth) const {
		if (oth.size() != size())
			return false;
		for (std::size_t i = 0; i < size(); ++i) {
			if (get_pauli(i) != oth.get_pauli(i)) {
				return false;
			}
		}
		return true;
	}
	/** @} */

	/** @name Content Copying
	 * @{
	 */

	/** @brief Copies the full content (Pauli string and coefficient) from another view. */
	void copy_content(NonOwningPauliTermPacked const& nopt) {
		copy_paulis(nopt);
		set_coefficient(nopt.coefficient());
	}
	/** @brief Copies the full content from a read-only view. */
	void copy_content(ReadOnlyNonOwningPauliTermPacked const& nopt) {
		copy_paulis(nopt);
		set_coefficient(nopt.coefficient());
	}
	/** @brief Copies just the Pauli string from another view. */
	void copy_paulis(ReadOnlyNonOwningPauliTermPacked const& ronopt) {
		assert(ronopt.size() == size());
		for (std::size_t i = 0; i < size(); ++i) {
			set_pauli(i, ronopt.get_pauli(i));
		}
	}
	/** @brief Copies just the Pauli string from another mutable view. */
	void copy_paulis(NonOwningPauliTermPacked const& nopt) {
		assert(nopt.size() == size());
		for (std::size_t i = 0; i < size(); ++i) {
			set_pauli(i, nopt.get_pauli(i));
		}
	}

	/**
	 * @brief Copies content from another view using the container's optimized copy routine.
	 * @pre Both views must belong to the same parent container.
	 */
	void fast_copy_content(NonOwningPauliTermPacked const& nopt) {
		assert(&nopt.ptc.get() == &ptc.get());
		set_coefficient(nopt.coefficient());
		ptc.get().copy_fast(nopt.idx, idx);
	}
	/** @} */

	/** @name Gate Application
	 * @{
	 */
	void apply_pauli(Pauli_gates g, unsigned qubit) {
		assert(qubit < size());
		set_coefficient(coefficient() * get_pauli(qubit).apply_pauli(g));
	}
	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) {
		assert(qubit < size());
		auto const pb = get_pauli(qubit);
		auto p = pb;
		set_coefficient(coefficient() * p.apply_clifford(g));
		set_pauli(qubit, p);
		_set_dirty(pb != p);
	}
	void apply_unital_noise(UnitalNoise n, unsigned qubit, T p) {
		assert(qubit < size());
		const auto bpauli = get_pauli(qubit);
		auto pauli = bpauli;
		set_coefficient(coefficient() * pauli.apply_unital_noise(n, p));
		_set_dirty(bpauli != pauli);
	}
	void apply_cx(unsigned control, unsigned target) {
		assert(control != target && "cx can't use same control and target");
		assert(control < size() && target < size());
		auto const bpctrl = get_pauli(control);
		auto const bptarg = get_pauli(target);
		auto pctrl = bpctrl;
		auto ptarg = bptarg;
		set_coefficient(coefficient() * pctrl.apply_cx(ptarg));
		set_pauli(control, pctrl);
		set_pauli(target, ptarg);
		_set_dirty(pctrl != bpctrl || ptarg != bptarg);
	}
	void apply_rz(unsigned qubit, T theta, NonOwningPauliTermPacked& output) {
		assert(qubit < size());
		assert(get_pauli(qubit) != p_i && get_pauli(qubit) != p_z && "Should not happen");

		const auto cos_teta = cos(theta);
		const auto sin_theta = sin(theta);

		set_coefficient(coefficient() * cos_teta);

		if (get_pauli(qubit) == p_x) {
			output.set_pauli(qubit, p_y);
			output.set_coefficient(output.coefficient() * -sin_theta);
		} else {
			assert(get_pauli(qubit) == p_y);
			output.set_pauli(qubit, p_x);
			output.set_coefficient(output.coefficient() * sin_theta);
		}
		output._set_dirty(true);
	}
	void apply_amplitude_damping_xy([[maybe_unused]] unsigned qubit, T p) {
		assert(qubit < size());
		assert(get_pauli(qubit) != p_z && get_pauli(qubit) != p_i && "Should not happen");

		set_coefficient(coefficient() * sqrt(1 - p));
	}
	void apply_amplitude_damping_z(unsigned qubit, T p, NonOwningPauliTermPacked& output) {
		assert(get_pauli(qubit) == p_z && "Should not happen");
		output.set_coefficient(output.coefficient() * p);
		output.set_pauli(qubit, p_i);
		set_coefficient(coefficient() * (1 - p));
		output._set_dirty(true);
	}
	/** @} */

	/**
	 * @brief Prints the term to an output stream.
	 */
	friend std::ostream& operator<<(std::ostream& os, NonOwningPauliTermPacked const& pt) {
		os << static_cast<ReadOnlyNonOwningPauliTermPacked>(pt);
		return os;
	}

	/**
	 * @brief If term is symbolic, simplify term using variable dictionnary.
	 */
	template <typename U = T, std::enable_if_t<std::is_same_v<U, T> && Symbolic<U>, bool> = true>
	void simplify(std::unordered_map<std::string, typename U::Underlying_t> const& variables = {}) {
		auto mapped = coefficient().symbolic_evaluate(variables);
		auto simplified = mapped.simplified();
		set_coefficient(std::move(simplified));
	}
};
