const oddEvenLinkedList = require('./odd-even-linked-list');

test('return the reordered list with odd and even index', () => {
    expect(oddEvenLinkedList([1,2,3,4,5])).toStrictEqual([1,3,5,2,4])
})

test('return the reordered list with odd and even index', () => {
    expect(oddEvenLinkedList([2,1,3,5,6,4,7])).toStrictEqual([2,3,6,7,1,5,4])
})