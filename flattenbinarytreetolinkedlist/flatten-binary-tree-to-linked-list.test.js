const flattenBinaryTreeToLinkedList = require('./flatten-binary-tree-to-linked-list');

test('flatten brinary tree to list with null', () => {
    expect(flattenBinaryTreeToLinkedList([1,2,5,3,4,null,6])).toStrictEqual([1,null,2,null,3,null,4,null,5,null,6])
})
test('return the same array', () => {
    expect(flattenBinaryTreeToLinkedList([0])).toStrictEqual([0])
})
