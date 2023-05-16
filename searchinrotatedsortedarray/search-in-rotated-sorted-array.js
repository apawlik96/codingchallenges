// https://leetcode.com/problems/search-in-rotated-sorted-array/
function searchInRotatedSortedArray(nums,target){
    const array = nums.concat(target)
    const mySet = new Set()
    for(let i=0; i<array.length; i++){
        mySet.add(array[i])
    }
    if(array.length !== mySet.size){
        for(let i=0; i<nums.length; i++){
            if(nums[i] === target){
                return i
            }
        }
    } else {
        return -1
    }
}

searchInRotatedSortedArray([4,5,6,7,0,1,2],0)
