const convertSortedListToBinarySearchTree = require('./convert-sorted-list-to-binary-search-tree')

test('return a height-balanced brinary tree' , () =>{
    expect(convertSortedListToBinarySearchTree([-10,-3,0,5,9])).toStrictEqual([0,-3,9,-10,null,5])
})
test('return an empty array' , () =>{
    expect(convertSortedListToBinarySearchTree([])).toStrictEqual([])
})