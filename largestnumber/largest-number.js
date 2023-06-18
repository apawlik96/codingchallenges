// https://leetcode.com/problems/largest-number/
function largestNumber (nums) {
    nums.sort().reverse()
    return nums.join("")
}

largestNumber([10,2])
