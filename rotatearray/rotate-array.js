// https://leetcode.com/problems/rotate-array/description/
function rotateArray(nums, k){
    const result = []
    const numb = nums.length - k
    for(let i=numb; i<nums.length; i++){
        result.push(nums[i])
    }
    nums.splice(numb)
    return result.concat(nums)
}

rotateArray([1,2,3,4,5,6,7], 3)

module.exports = rotateArray