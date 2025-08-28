#ifndef PP_ADAPTER_HPP
#define PP_ADAPTER_HPP

#include <memory>

template <typename TOut, typename ItIn>
class AdapterIt {
	ItIn it;
	std::shared_ptr<TOut> obj;

	void init() {
		if (obj == nullptr) {
			obj = std::make_shared<TOut>(*it);
		}
	}

    public:
	AdapterIt(ItIn&& it_in) : it(it_in), obj(nullptr) {}

	using iterator_category = std::forward_iterator_tag;
	using difference_type = std::ptrdiff_t;
	using value_type = TOut;
	using pointer = value_type*;
	using reference = value_type&;

	reference operator*() {
		init();
		return *obj;
	}
	pointer operator->() {
		init();
		return obj.get();
	}

	AdapterIt& operator++() {
		it++;
		obj = nullptr;
		return *this;
	}

	AdapterIt operator++(int) {
		AdapterIt tmp = *this;
		++(*this);
		return tmp;
	}

	friend bool operator==(AdapterIt const& lhs, AdapterIt const& rhs) { return lhs.it == rhs.it; }
	friend bool operator!=(AdapterIt const& lhs, AdapterIt const& rhs) { return !(lhs == rhs); }
};

#endif
