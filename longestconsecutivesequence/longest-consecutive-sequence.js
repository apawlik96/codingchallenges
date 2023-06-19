// https://leetcode.com/problems/longest-consecutive-sequence/description/
function longestConsecutiveSequence(nums) {
    nums.sort((a,b) => a-b)
    let result = []
    for (let i=0; i<=nums.length; i++){
        if (nums[i+1] - nums[i] === 1) result.push(nums[i])
    }
    return result.length + 1
}

longestConsecutiveSequence([100,4,200,1,3,2])

module.exports = longestConsecutiveSequence