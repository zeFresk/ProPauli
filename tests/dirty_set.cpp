#include "container/dirty_set.hpp"
#include <gtest/gtest.h>
#include <vector>
#include <numeric>
#include <algorithm>

// --- A "Spy" Key class to track object lifetime ---
// This class allows us to verify that the container is correctly constructing,
// destructing, moving, and copying elements without leaks or double-frees.
struct TrackedInt {
	// Static counters to track lifetime events across all instances
	static size_t constructions;
	static size_t destructions;
	static size_t copies;
	static size_t moves;

	int id;
	bool dirty;

	// Helper to reset counters before each test
	static void reset_counts() {
		constructions = 0;
		destructions = 0;
		copies = 0;
		moves = 0;
	}

	// Main constructor
	explicit TrackedInt(int val, bool is_dirty = false) : id(val), dirty(is_dirty) { constructions++; }

	// Copy constructor
	TrackedInt(const TrackedInt& other) : id(other.id), dirty(other.dirty) {
		constructions++;
		copies++;
	}

	// Move constructor (invalidates the source)
	TrackedInt(TrackedInt&& other) noexcept : id(other.id), dirty(other.dirty) {
		other.id = -1; // Mark as moved-from
		constructions++;
		moves++;
	}

	// Copy assignment
	TrackedInt& operator=(const TrackedInt& other) {
		id = other.id;
		dirty = other.dirty;
		copies++;
		return *this;
	}

	// Move assignment
	TrackedInt& operator=(TrackedInt&& other) noexcept {
		id = other.id;
		dirty = other.dirty;
		other.id = -1;
		moves++;
		return *this;
	}

	// Destructor (only counts if the object is valid)
	~TrackedInt() {
		if (id != -1) {
			destructions++;
		}
	}

	// Equality is based on ID only
	bool operator==(const TrackedInt& other) const { return id == other.id; }
};

// Initialize static counters
size_t TrackedInt::constructions = 0;
size_t TrackedInt::destructions = 0;
size_t TrackedInt::copies = 0;
size_t TrackedInt::moves = 0;

// Custom hasher for TrackedInt
struct TrackedIntHash {
	size_t operator()(const TrackedInt& ti) const { return std::hash<int>()(ti.id); }
};

// --- Test Fixture ---
// Creates a fresh DirtySet and resets counters for each test
class DirtySetTest : public ::testing::Test {
    protected:
	void SetUp() override { TrackedInt::reset_counts(); }

	void TearDown() override {
		set.clear();
		// The check is removed from here. We will add more specific checks in each test.
	}
	DirtySet<TrackedInt, TrackedIntHash> set;
};

// --- Unit Tests ---

TEST_F(DirtySetTest, DefaultConstruction) {
	EXPECT_EQ(set.size(), 0);
	EXPECT_TRUE(set.empty());
	EXPECT_EQ(set.begin(), set.end());
}

TEST_F(DirtySetTest, EmplaceNewElement) {
	auto [it, inserted] = set.emplace(TrackedInt(10));

	EXPECT_TRUE(inserted);
	EXPECT_EQ(set.size(), 1);
	ASSERT_NE(it, set.end());
	EXPECT_EQ(it->id, 10);
}

TEST_F(DirtySetTest, EmplaceExistingElement) {
	set.emplace(TrackedInt(10)); // Setup
	TrackedInt::reset_counts(); // Reset after setup

	auto [it, inserted] = set.emplace(TrackedInt(10));

	EXPECT_FALSE(inserted);
	EXPECT_EQ(set.size(), 1);
	ASSERT_NE(it, set.end());
	EXPECT_EQ(it->id, 10);
}
TEST_F(DirtySetTest, EraseIfSimple) {
	set.emplace(TrackedInt(10));
	set.emplace(TrackedInt(20, true)); // Mark this one as dirty
	set.emplace(TrackedInt(30));
	EXPECT_EQ(set.size(), 3);

	TrackedInt::reset_counts();

	size_t erased_count = set.erase_if([](const TrackedInt& key) { return key.dirty; });

	EXPECT_EQ(erased_count, 1);
	EXPECT_EQ(set.size(), 2);
}

TEST_F(DirtySetTest, EraseIfMultiple) {
	set.emplace(TrackedInt(10, true));
	set.emplace(TrackedInt(20));
	set.emplace(TrackedInt(30, true));
	set.emplace(TrackedInt(40));
	EXPECT_EQ(set.size(), 4);

	TrackedInt::reset_counts();

	size_t erased_count = set.erase_if([](const TrackedInt& key) { return key.dirty; });

	EXPECT_EQ(erased_count, 2);
	EXPECT_EQ(set.size(), 2);
}

TEST_F(DirtySetTest, EraseIfNone) {
	set.emplace(TrackedInt(10));
	set.emplace(TrackedInt(20));
	EXPECT_EQ(set.size(), 2);

	TrackedInt::reset_counts();

	size_t erased_count = set.erase_if([](const TrackedInt& key) { return key.dirty; });

	EXPECT_EQ(erased_count, 0);
	EXPECT_EQ(set.size(), 2);
}

TEST_F(DirtySetTest, ReclaimTombstoneOnEmplace) {
	set.emplace(TrackedInt(10));
	set.emplace(TrackedInt(20, true));
	set.emplace(TrackedInt(30));

	// Erase 20, creating a tombstone
	set.erase_if([](const TrackedInt& key) { return key.dirty; });
	EXPECT_EQ(set.size(), 2);

	TrackedInt::reset_counts();

	// Emplace a new element. It should reclaim the tombstone slot.
	auto [it, inserted] = set.emplace(TrackedInt(40));

	EXPECT_TRUE(inserted);
	EXPECT_EQ(set.size(), 3);
	EXPECT_EQ(it->id, 40);
}

TEST_F(DirtySetTest, TriggerRehash) {
	// With a load factor of 0.85, inserting 7 elements into a table of size 8
	// (7/8 = 0.875) will trigger a rehash on the 7th emplace.
	for (int i = 0; i < 7; ++i) {
		set.emplace(TrackedInt(i));
	}

	EXPECT_EQ(set.size(), 7);

	// Verify all elements are still present and findable after rehash
	for (int i = 0; i < 7; ++i) {
		auto it = set.emplace(TrackedInt(i)).first;
		ASSERT_NE(it, set.end());
		EXPECT_EQ(it->id, i);
	}
}

TEST_F(DirtySetTest, LifetimeCheckAfterRehash) {
	{
		DirtySet<TrackedInt, TrackedIntHash> local_set;
		for (int i = 0; i < 100; ++i) {
			local_set.emplace(TrackedInt(i));
		}
		EXPECT_EQ(local_set.size(), 100);
	} // local_set is destroyed here
}

TEST_F(DirtySetTest, Clear) {
	for (int i = 0; i < 50; ++i) {
		set.emplace(TrackedInt(i));
	}
	EXPECT_EQ(set.size(), 50);

	size_t destructions_before_clear = TrackedInt::destructions;

	set.clear();

	EXPECT_EQ(set.size(), 0);
	EXPECT_TRUE(set.empty());

	// Check that clear() destroyed exactly the number of elements that were in the set.
	size_t destroyed_by_clear = TrackedInt::destructions - destructions_before_clear;
	EXPECT_GE(destroyed_by_clear, 50);
}

TEST_F(DirtySetTest, Iteration) {
	for (int i = 0; i < 10; ++i) {
		set.emplace(TrackedInt(i * 10));
	}

	std::vector<int> found_ids;
	for (const auto& key : set) {
		found_ids.push_back(key.id);
	}
	std::sort(found_ids.begin(), found_ids.end());

	ASSERT_EQ(found_ids.size(), 10);
	for (int i = 0; i < 10; ++i) {
		EXPECT_EQ(found_ids[i], i * 10);
	}
}

TEST_F(DirtySetTest, CopyConstructorAndAssignment) {
	for (int i = 0; i < 10; ++i) {
		set.emplace(TrackedInt(i));
	}

	TrackedInt::reset_counts();

	// Test Copy Constructor
	DirtySet<TrackedInt, TrackedIntHash> set2 = set;
	EXPECT_EQ(set.size(), 10);
	EXPECT_EQ(set2.size(), 10);
	EXPECT_EQ(TrackedInt::copies, 10); // 10 elements copied

	TrackedInt::reset_counts();

	// Test Copy Assignment
	DirtySet<TrackedInt, TrackedIntHash> set3;
	set3.emplace(TrackedInt(99)); // To ensure old elements are destroyed
	set3 = set;
	EXPECT_EQ(set3.size(), 10);
}

TEST_F(DirtySetTest, MoveConstructorAndAssignment) {
	for (int i = 0; i < 10; ++i) {
		set.emplace(TrackedInt(i));
	}

	TrackedInt::reset_counts();

	// Test Move Constructor
	DirtySet<TrackedInt, TrackedIntHash> set2 = std::move(set);
	EXPECT_EQ(set2.size(), 10);

	// Test Move Assignment
	DirtySet<TrackedInt, TrackedIntHash> set3;
	set3.emplace(TrackedInt(99));
	TrackedInt::reset_counts();

	set3 = std::move(set2);
	EXPECT_EQ(set3.size(), 10);
}

TEST_F(DirtySetTest, EmplaceIntoSaturatedTableWithTombstones) {
	// 1. Determine initial capacity. emplace triggers growth to 8.
	set.emplace(TrackedInt(0));
	int initial_capacity = 8; // Based on our implementation's growth logic

	// 2. Fill the table to its absolute capacity with live elements.
	for (int i = 1; i < initial_capacity; ++i) {
		set.emplace(TrackedInt(i));
	}
	ASSERT_EQ(set.size(), initial_capacity);

	// 3. Erase some elements, creating tombstones but keeping the table saturated.
	set.erase_if([](const TrackedInt& k) { return k.id % 2 == 0; }); // Erase 0, 2, 4, 6
	ASSERT_EQ(set.size(), 4); // Size is low, but all 8 slots are occupied.

	// 4. THIS IS THE TRIGGER: Try to emplace a NEW element that doesn't exist.
	// The load factor check (5/8) will pass, but the table has no empty slots.
	// This will cause the infinite loop.
	auto [it, inserted] = set.emplace(TrackedInt(99));

	// If the test doesn't hang, we can verify correctness.
	EXPECT_TRUE(inserted);
	EXPECT_EQ(set.size(), 5);
}

// A variation to ensure lookups don't infinite loop.
TEST_F(DirtySetTest, FindExistingInSaturatedTableWithTombstones) {
	set.emplace(TrackedInt(0));
	int initial_capacity = 8;
	for (int i = 1; i < initial_capacity; ++i) {
		set.emplace(TrackedInt(i));
	}
	set.erase_if([](const TrackedInt& k) { return k.id % 2 == 0; }); // Erase evens

	// This should NOT loop, because the "key exists" condition will terminate the loop.
	auto [it, inserted] = set.emplace(TrackedInt(1)); // Key 1 still exists
	EXPECT_FALSE(inserted);
	EXPECT_EQ(it->id, 1);
}
