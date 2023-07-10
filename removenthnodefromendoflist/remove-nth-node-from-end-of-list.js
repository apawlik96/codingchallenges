// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
function removeNthNodeFromEndOfList (head ,n) {
    let idx = head.length - n
    for (let i=0; i<head.length; i++) {
        head.splice(idx, 1)
        return head
    }
}

removeNthNodeFromEndOfList ([1], 1)

module.exports = removeNthNodeFromEndOfList