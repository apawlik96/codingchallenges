const brinaryTreeLevelOrderTraversal = require('./binary-tree-level-order-traversal')

test('return 3 arrays without null' , () =>{
    expect(brinaryTreeLevelOrderTraversal([3,9,20,null,null,15,7])).toStrictEqual([[3],[9,20],[15,7]])
})
test('return a nested array' , () =>{
    expect(brinaryTreeLevelOrderTraversal([1])).toStrictEqual([[1]])
})