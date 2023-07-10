// https://leetcode.com/problems/reverse-linked-list-ii/description/

function reverseLinkedListII(head,left,right) {
    if(head.length === 1){
        return head 
    }
    const idxOne = left - 1
    const idxTwo = right - 1
    const arr = [];
    for (let i=0; i<head.length; i++){
        if (i > idxOne && i < idxTwo) {
            arr.push(head[i], head[idxOne])
        } else if (i < idxOne){
            arr.push(head[i],head[idxTwo])
        } else if (i > idxTwo){
            arr.push(head[i])
        }
    }
    return arr
}

reverseLinkedListII([1,2,3,4,5],2,4)

module.exports = reverseLinkedListII