from math import log


class BloomFilter:
    """Bloom filter"""

    def __init__(self, items_count, fp_prob):
        assert 0 <= fp_prob <= 1, "Probability should be in range [0,1]"
        assert items_count > 0, "Items count must be positive"

        self._size = self._evaluate_size(items_count, fp_prob)
        self._hash_count = self._evaluate_hash_count(self._size, items_count)
        self._bit_array = [0] * self._size

    def add(self, item):
        """Add an element to bloom filter"""
        for i in range(self._hash_count):
            digest = self._evaluate_hash(item, i)
            self._bit_array[digest] = True

    def __contains__(self, item):
        """ x.__contains__(y) <==> y in x (possible false positive). """
        for i in range(self._hash_count):
            digest = self._evaluate_hash(item, i)
            if not self._bit_array[digest]:
                return False
        return True

    @classmethod
    def _evaluate_size(cls, items_count, fp_prob):
        m = -(items_count * log(fp_prob)) / (log(2) ** 2)
        return int(m)

    @classmethod
    def _evaluate_hash_count(cls, size, items_count):
        k = (size / items_count) * log(2)
        return int(k)

    def _evaluate_hash(self, item, k):
        return k * hash(item) % self._size


def test_contains():
    f = BloomFilter(items_count=100, fp_prob=0.01)
    f.add('x')
    assert 'x' in f


def test_not_contains():
    f = BloomFilter(items_count=100, fp_prob=0.01)
    f.add('x')
    assert 'y' not in f
