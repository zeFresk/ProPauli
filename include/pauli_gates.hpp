#ifndef PP_CLIFFORD_GATES_HPP
#define PP_CLIFFORD_GATES_HPP

class NoOp {
	template <typename P>
	void operator()(P&& p, unsigned q) {}
};

template <typename T>
concept has_apply_clifford = requires(T c) {
	c.template apply_clifford<NoOp>(0);
};

class Xgate {
	template <typename P>
	requires has_apply_clifford<P> constexpr void operator()(P&& p, unsigned q) {
		p.template apply_clifford<Xgate>(q);
	}

	template <typename P>
	requires(!has_apply_clifford<P>) constexpr void operator()(P&& p, unsigned q) {
		p.apply_x(q);
	}

	template <typename P>
	constexpr auto operator()(P&& p) {
		return p.apply_x();
	}
};

class Ygate {
	template <typename P>
	requires has_apply_clifford<P> constexpr void operator()(P&& p, unsigned q) {
		p.template apply_clifford<Ygate>(q);
	}

	template <typename P>
	requires(!has_apply_clifford<P>) constexpr void operator()(P&& p, unsigned q) {
		p.apply_y(q);
	}

	template <typename P>
	constexpr auto operator()(P&& p) {
		return p.apply_y();
	}
};

class Zgate {
	template <typename P>
	requires has_apply_clifford<P> constexpr void operator()(P&& p, unsigned q) {
		p.template apply_clifford<Zgate>(q);
	}

	template <typename P>
	requires(!has_apply_clifford<P>) constexpr void operator()(P&& p, unsigned q) {
		p.apply_Z(q);
	}
};

class Igate {
	template <typename P>
	requires has_apply_clifford<P> constexpr void operator()(P&& p, unsigned q) {
		p.template apply_clifford<Igate>(q);
	}

	template <typename P>
	requires(!has_apply_clifford<P>) constexpr void operator()(P&& p, unsigned q) {
		p.apply_i(q);
	}

	template <typename P>
	constexpr auto operator()(P&& p) {
		return p.apply_i();
	}
};

class Hgate {
	template <typename P>
	requires has_apply_clifford<P> constexpr void operator()(P&& p, unsigned q) {
		p.template apply_clifford<Hgate>(q);
	}

	template <typename P>
	requires(!has_apply_clifford<P>) constexpr void operator()(P&& p, unsigned q) {
		p.apply_h(q);
	}

	template <typename P>
	constexpr auto operator()(P&& p) {
		return p.apply_h();
	}
};

class NoOp2 {
	template <typename P>
	void operator()(P&& p, unsigned c, unsigned t) {}
};

template <typename T>
concept has_apply_clifford_2q = requires(T c) {
	c.template apply_clifford<NoOp2>(0, 1);
};

class CXgate {
	template <typename P>
	requires has_apply_clifford<P> constexpr void operator()(P&& p, unsigned q, unsigned t) {
		p.template apply_clifford<CXgate>(q, t);
	}

	template <typename P>
	requires(!has_apply_clifford<P>) constexpr void operator()(P&& p, unsigned q, unsigned t) {
		p.apply_cx(q, t);
	}

	template <typename P>
	constexpr auto operator()(P&& p1, P&& p2) {
		return p1.apply_cx(p2);
	}
};

#endif
