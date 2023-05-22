const medianOfTwoSortedArrays = require('./median-of-two-sorted-arrays')

test('return the median of two sorted arrays' , () =>{
    expect(medianOfTwoSortedArrays([1,2],[3,4])).toBe(2.5)
})
test('return the median of two sorted arrays' , () =>{
    expect(medianOfTwoSortedArrays([1,3],[2])).toBe(2)
})