// https://leetcode.com/problems/rotate-array/description/
function rotateArray(nums, k){
    const result = []
    const numbOfIdx = nums.length - k
    nums.forEach((num, index) => {
        if(index >= numbOfIdx) result.push(num)
    })
    nums.splice(numbOfIdx)
    return result.concat(nums)
}

rotateArray([1,2,3,4,5,6,7], 3)

module.exports = rotateArray