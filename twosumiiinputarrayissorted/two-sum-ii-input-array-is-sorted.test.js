const twoSumIIInputArrayIsSorted = require('./two-sum-ii-input-array-is-sorted');

test('return the numbers of index being the sum of the target', () => {
    expect(twoSumIIInputArrayIsSorted([2,7,11,15],9)).toStrictEqual([0,1])
})

test('return the numbers of index being the sum of the target', () => {
    expect(twoSumIIInputArrayIsSorted([2,3,4],6)).toStrictEqual([0,2])
})