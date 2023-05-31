const convertSortedListToBinarySearchTree = require('./convert-sorted-list-to-binary-search-tree');

test('return a brinary tree with a null value from an array', () => {
    expect(convertSortedListToBinarySearchTree([-10,-3,0,5,9])).toStrictEqual([0,-3,9,-10,null,5])
})

test('return the same', () => {
    expect(convertSortedListToBinarySearchTree([])).toStrictEqual([])
})