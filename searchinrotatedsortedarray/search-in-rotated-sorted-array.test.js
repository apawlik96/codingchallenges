const searchInRotatedSortedArray = require('./search-in-rotated-sorted-array');

test('return index target from array' , () => {
    expect(searchInRotatedSortedArray([4,5,6,7,0,1,2],0)).toBe(4)
}) 
test('return -1' , () =>{
    expect(searchInRotatedSortedArray([4,5,6,7,0,1,2],3)).toBe(-1)
})
