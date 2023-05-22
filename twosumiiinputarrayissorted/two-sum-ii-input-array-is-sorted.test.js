const twoSumIIInputArrayIsSorted = require('./two-sum-ii-input-array-is-sorted')

test('return index numbers whose sum is equal to the target' , () =>{
    expect(twoSumIIInputArrayIsSorted([2,7,11,15],9)).toStrictEqual([1,2])
})
test('return index numbers whose sum is equal to the target' , () =>{
    expect(twoSumIIInputArrayIsSorted([2,3,4],6)).toStrictEqual([1,3])
})