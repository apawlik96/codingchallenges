// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/ 
function convertSortedListToBinarySearchTree (head) {
    const brinaryTree = []
    const arrayPositiveNumb = []
    const arrayNegativeNumb = []
    for (const numb of head){
            if(numb === 0){
            brinaryTree.push(numb)
        } else if (numb > 0){
            arrayPositiveNumb.push(numb)
            arrayPositiveNumb.sort().reverse()
        } else if (numb < 0){
            arrayNegativeNumb.push(numb)
            arrayNegativeNumb.sort().reverse()
        }
    }
    brinaryTree.push(arrayNegativeNumb[0],arrayPositiveNumb[0])
    for (let i=1; i<arrayNegativeNumb.length; i++){
        brinaryTree.push(arrayNegativeNumb[i], arrayNegativeNumb[i+1])
        if (arrayNegativeNumb[i+1] === undefined){
            brinaryTree.push(null)
        }
        brinaryTree.push(arrayPositiveNumb[i], arrayPositiveNumb[i+1])
    }
    const arr = brinaryTree.filter (numb => numb !== undefined)
    console.log(arr)
}

convertSortedListToBinarySearchTree([-10,-3,0,5,9])
