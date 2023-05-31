// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ 
function findFirstAndLastPositionOfElementInSortedArray (nums, target) {
    const array = [];
    for (let i=0; i<nums.length; i++){
        if(nums[i] === target) {
            array.push(i)
        }
    }
    if(array.length === 0){
        array.push(-1,-1)
    }
    return array 
}

findFirstAndLastPositionOfElementInSortedArray([5,7,7,8,8,10],8)
