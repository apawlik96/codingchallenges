// https://leetcode.com/problems/odd-even-linked-list/
function oddEvenLinkedList(head){
    let arrayWithOddIdx = []
    let arrayWitheEvenIdx = []
    for(let i=0; i<head.length; i++){
        i % 2 !== 0 ? arrayWitheEvenIdx.push(head[i]) : arrayWithOddIdx.push(head[i])
    }
    return arrayWithOddIdx.concat(arrayWitheEvenIdx)
}

oddEvenLinkedList([2,1,3,5,6,4,7])

module.exports = oddEvenLinkedList