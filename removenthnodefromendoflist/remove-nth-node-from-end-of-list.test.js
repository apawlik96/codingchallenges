const removeNthNodeFromEndOfList = require('./remove-nth-node-from-end-of-list')

test('remove index 2 from the end of the array' , () => {
    expect(removeNthNodeFromEndOfList([1,2,3,4,5])).toEqual(expect.arrayContaining([1,2,3,5]))
})
test('return empty array' , () => {
    expect(removeNthNodeFromEndOfList([1])).toEqual(expect.arrayContaining([]))
})