// https://leetcode.com/problems/merge-k-sorted-lists/

function mergeKSortedLists (lists) {
    const nums = lists.toString()
    if(nums.length === 0){
        return []
    }
    return nums.split(',').sort()
}

mergeKSortedLists([[1,4,5],[1,3,4],[2,6]])

module.exports = mergeKSortedLists