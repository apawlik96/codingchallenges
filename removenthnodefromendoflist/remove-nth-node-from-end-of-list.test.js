const removeNthNodeFromEndOfList = require('./remove-nth-node-from-end-of-list');

test('remove the second end index', () => {
    expect(removeNthNodeFromEndOfList([1,2,3,4,5],2)).toStrictEqual([1,2,3,5])
})

test('return an empty array', () => {
    expect(removeNthNodeFromEndOfList([1],1)).toStrictEqual([])
})