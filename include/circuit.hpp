#ifndef PP_CIRCUIT_HPP
#define PP_CIRCUIT_HPP

class Circuit {
    public:
	Circuit(unsigned nb_qubits);

	Circuit(Circuit const&) = delete;
	Circuit& operator=(Circuit const&) = delete;

	Circuit(Circuit&&) noexcept = default;
	Circuit& operator=(Circuit&&) noexcept = default;

	unsigned nb_qubits() const { return nb_qubits_; }

    private:
	unsigned nb_qubits_;
};

#endif
