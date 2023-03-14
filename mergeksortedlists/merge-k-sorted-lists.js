function mergeKSortedLists (lists) {
    const nums = lists.toString()
    if(nums.length === 0){
        return "[]"
    } else {
        const array = nums.split(',')
        return array.sort()
    }
}

mergeKSortedLists([[1,4,5],[1,3,4],[2,6]])
