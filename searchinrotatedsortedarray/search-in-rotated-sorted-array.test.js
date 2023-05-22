const searchInRotatedSortedArray = require('./search-in-rotated-sorted-array')

test('return the index number from the array which is equal to the target' , () =>{
    expect(searchInRotatedSortedArray([4,5,6,7,0,1,2],0)).toBe(4)
})
test('return -1' , () =>{
    expect(searchInRotatedSortedArray([4,5,6,7,0,1,2],3)).toBe(-1)
})