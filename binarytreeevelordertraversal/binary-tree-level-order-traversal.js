// https://leetcode.com/problems/binary-tree-level-order-traversal/description/
function brinaryTreeLevelOrderTraversal (root) {
    let array = root.filter (numb => numb !== null) 
    const firstArray = [];
    firstArray.push(root[0])
    const tab = []
    tab.push(firstArray)
    for(let i=1; i<array.length-1; i+=2){
        const arr = []
        arr.push(array[i])
        arr.push(array[i+1])
        tab.push(arr)
    }
    return tab
}

brinaryTreeLevelOrderTraversal([3,9,20,null,null,15,7])

module.exports = brinaryTreeLevelOrderTraversal
