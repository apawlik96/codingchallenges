// https://leetcode.com/problems/search-in-rotated-sorted-array/
function searchInRotatedSortedArray(nums,target){
    let array = nums.concat(target)
    let mySet = new Set()
    nums.forEach(numb => mySet.add(numb))
    if(array.length !== mySet.size){
        for(const numb of nums){
            if(numb === target){
                return nums.indexOf(numb)
            }
        }
    }
    return -1
}

searchInRotatedSortedArray([4,5,6,7,0,1,2],0)
