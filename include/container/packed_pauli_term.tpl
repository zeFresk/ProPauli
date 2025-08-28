class ReadOnlyNonOwningPauliTermPacked {
    protected:
	std::reference_wrapper<const PauliTermContainer<T, Underlying>> ptc;
	std::size_t idx;

    public:
	ReadOnlyNonOwningPauliTermPacked(PauliTermContainer<T, Underlying> const& ptc_, std::size_t index)
		: ptc(ptc_), idx(index) {}

	T expectation_value() const {
		for (std::size_t i = 0; i < size(); ++i) {
			if (!get_pauli(i).commutes_with(p_z)) {
				return T{ 0 };
			}
		}
		return coefficient();
	}

	Pauli get_pauli(std::size_t qidx) const { return ptc.get().get_qubit(idx, qidx); }
	decltype(auto) size() const { return ptc.get().nb_qubits(); }
	// decltype(auto) begin() const { return PackedPauliIterator{ ptc, idx }; }
	// decltype(auto) end() const { return PackedPauliIterator{ ptc, idx + 1 }; }

	explicit operator PauliTerm<T>() const {
		std::vector<Pauli> paulis;
		paulis.reserve(size());
		for (std::size_t i = 0; i < size(); ++i) {
			paulis.push_back(get_pauli(i));
		}
		return PauliTerm<T>{ paulis.begin(), paulis.end(), coefficient() };
	}

	std::size_t phash() const noexcept { return ptc.get().fast_phash(idx); }

	friend bool operator==(ReadOnlyNonOwningPauliTermPacked const& lhs,
			       ReadOnlyNonOwningPauliTermPacked const& rhs) {
		return (lhs.size() == rhs.size()) && (lhs.coefficient() == rhs.coefficient()) &&
		       lhs.equal_bitstring(rhs);
	}
	friend bool operator==(ReadOnlyNonOwningPauliTermPacked const& lhs, PauliTerm<T> const& rhs) {
		return static_cast<PauliTerm<T>>(lhs) == rhs;
	}
	friend bool operator==(PauliTerm<T> const& lhs, ReadOnlyNonOwningPauliTermPacked const& rhs) {
		return rhs == lhs;
	}

	bool equal_bitstring(ReadOnlyNonOwningPauliTermPacked const& oth) const {
		return (&ptc.get() == &oth.ptc.get()) ? ptc.get().fast_equal_bitstring(idx, oth.idx) :
							slow_equal_bitstring(oth);
	}

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

	T coefficient() const noexcept { return ptc.get().get_coefficient(idx); }

	std::size_t pauli_weight() const noexcept { return ptc.get().fast_pauli_weight(idx); }

	friend std::ostream& operator<<(std::ostream& os, ReadOnlyNonOwningPauliTermPacked const& pt) {
		os << std::showpos << pt.coefficient() << " ";
		for (std::size_t i = 0; i < pt.size(); ++i) {
			os << pt.get_pauli(i);
		}
		return os;
	}
};

class NonOwningPauliTermPacked {
	std::reference_wrapper<PauliTermContainer<T, Underlying>> ptc;
	std::size_t idx;

    public:
	NonOwningPauliTermPacked(PauliTermContainer<T, Underlying>& ptc_, std::size_t index) : ptc(ptc_), idx(index) {}

	T expectation_value() const {
		for (std::size_t i = 0; i < ptc.nb_qubits(); ++i) {
			if (!get_pauli(i).commutes_with(p_z)) {
				return T{ 0 };
			}
		}
		return ptc.get_coefficient(idx);
	}

	Pauli get_pauli(std::size_t qidx) const { return ptc.get().get_qubit(idx, qidx); }
	void set_pauli(std::size_t qidx, Pauli p) { ptc.get().set_qubit(idx, qidx, p); }
	decltype(auto) size() const { return ptc.get().nb_qubits(); }
	// decltype(auto) begin() const { return PackedPauliIterator{ ptc, idx }; }
	// decltype(auto) end() const { return PackedPauliIterator{ ptc, idx + 1 }; }

	explicit operator PauliTerm<T>() const {
		std::vector<Pauli> paulis;
		paulis.reserve(size());
		for (std::size_t i = 0; i < size(); ++i) {
			paulis.push_back(get_pauli(i));
		}
		PauliTerm<T> ret{ paulis.begin(), paulis.end(), coefficient() };
		return ret;
	}

	std::size_t phash() const noexcept { return ptc.get().fast_phash(idx); }

	friend bool operator==(NonOwningPauliTermPacked const& lhs, NonOwningPauliTermPacked const& rhs) {
		return (lhs.size() == rhs.size()) && (lhs.coefficient() == rhs.coefficient()) &&
		       lhs.equal_bitstring(rhs);
	}
	friend bool operator==(PauliTerm<T> const& lhs, NonOwningPauliTermPacked const& rhs) {
		return static_cast<PauliTerm<T>>(rhs) == lhs;
	}
	friend bool operator==(NonOwningPauliTermPacked const& lhs, PauliTerm<T> const& rhs) { return rhs == lhs; }

	bool equal_bitstring(NonOwningPauliTermPacked const& oth) const {
		return (&ptc.get() == &oth.ptc.get()) ? ptc.get().fast_equal_bitstring(idx, oth.idx) :
							slow_equal_bitstring(oth);
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

	T coefficient() const noexcept { return ptc.get().get_coefficient(idx); }
	void set_coefficient(T coeff) { ptc.get().set_coefficient(idx, coeff); }
	void add_coeff(T coeff) { set_coefficient(coefficient() + coeff); }

	std::size_t pauli_weight() const noexcept { return ptc.get().fast_pauli_weight(idx); }

	friend std::ostream& operator<<(std::ostream& os, NonOwningPauliTermPacked const& pt) {
		os << std::showpos << pt.coefficient() << " ";
		for (std::size_t i = 0; i < pt.size(); ++i) {
			os << pt.get_pauli(i);
		}
		return os;
	}

	void copy_content(NonOwningPauliTermPacked const& nopt) {
		copy_paulis(nopt);
		set_coefficient(nopt.coefficient());
	}

	void copy_content(ReadOnlyNonOwningPauliTermPacked const& nopt) {
		copy_paulis(nopt);
		set_coefficient(nopt.coefficient());
	}

	void copy_paulis(ReadOnlyNonOwningPauliTermPacked const& ronopt) {
		assert(ronopt.size() == size());
		for (std::size_t i = 0; i < size(); ++i) {
			set_pauli(i, ronopt.get_pauli(i));
		}
	}

	void copy_paulis(NonOwningPauliTermPacked const& nopt) {
		assert(nopt.size() == size());
		for (std::size_t i = 0; i < size(); ++i) {
			set_pauli(i, nopt.get_pauli(i));
		}
	}

	void fast_copy_content(NonOwningPauliTermPacked const& nopt) {
		assert(&nopt.ptc.get() == &ptc.get());
		set_coefficient(nopt.coefficient());
		ptc.get().copy_fast(nopt.idx, idx);
	}

	operator ReadOnlyNonOwningPauliTermPacked() const { return ReadOnlyNonOwningPauliTermPacked(ptc, idx); }

	void apply_pauli(Pauli_gates g, unsigned qubit) {
		assert(qubit < size());
		set_coefficient(coefficient() * get_pauli(qubit).apply_pauli(g));
	}

	void apply_clifford(Clifford_Gates_1Q g, unsigned qubit) {
		assert(qubit < size());
		auto p = get_pauli(qubit);
		set_coefficient(coefficient() * p.apply_clifford(g));
		set_pauli(qubit, p);
	}

	void apply_unital_noise(UnitalNoise n, unsigned qubit, T p) {
		assert(qubit < size());
		auto pauli = get_pauli(qubit);
		set_coefficient(coefficient() * pauli.apply_unital_noise(n, p));
	}

	void apply_cx(unsigned control, unsigned target) {
		assert(control != target && "cx can't use same control and target");
		assert(control < size() && target < size());
		auto pctrl = get_pauli(control);
		auto ptarg = get_pauli(target);
		set_coefficient(coefficient() * pctrl.apply_cx(ptarg));
		set_pauli(control, pctrl);
		set_pauli(target, ptarg);
	}

	void apply_rz(unsigned qubit, T theta, NonOwningPauliTermPacked& output) {
		assert(qubit < size());
		assert(get_pauli(qubit) != p_i && get_pauli(qubit) != p_z && "Should not happen");

		const auto cos_teta = cos(theta);
		const auto sin_theta = sin(theta);

		set_coefficient(coefficient() * cos_teta);

		// use commutators?
		if (get_pauli(qubit) == p_x) {
			output.set_pauli(qubit, p_y);
			output.set_coefficient(output.coefficient() * -sin_theta);
		} else {
			assert(get_pauli(qubit) == p_y);
			output.set_pauli(qubit, p_x);
			output.set_coefficient(output.coefficient() * sin_theta);
		}
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
	}
};
