function flattenBinaryTreeToLinkedList (root) {
    const array  = []
    for (const numb of root){
        if(numb !== null){
            array.push(numb)
        }
    }
    array.sort()
    const arr = []
    for (let i=0; i<array.length-1; i++){
        arr.push(array[i],null)
    }
    arr.push(array[array.length-1])
    return arr
}

flattenBinaryTreeToLinkedList([1,2,5,3,4,null,6])
