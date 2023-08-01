const singleElementInASortedArray = require('./single-element-in-a-sorted-array');

test('return the single element that appears only once' , () =>{
    expect(singleElementInASortedArray([3,3,7,7,10,11,11])).toBe(10)
})
test('return the single element that appears only once' , () =>{
    expect(singleElementInASortedArray([1,1,2,3,3,4,4,8,8])).toBe(2)
})