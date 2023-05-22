function removeNthNodeFromEndOfList (head ,n) {
    const nIdx = head[head.length - n]
    return head.filter(numb => numb !== nIdx )
}

removeNthNodeFromEndOfList ([1], 1)

module.exports = removeNthNodeFromEndOfList