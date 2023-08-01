// https://leetcode.com/problems/single-element-in-a-sorted-array/
function singleElementInASortedArray(nums) {
    for(let i=1; i<nums.length-1; i++){
        if(nums[i-1] !== nums [i] && nums[i] !== nums[i+1]) return nums[i]
    }
}

singleElementInASortedArray([3,3,7,7,10,11,11])

module.exports = singleElementInASortedArray