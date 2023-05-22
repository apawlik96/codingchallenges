// https://leetcode.com/problems/first-missing-positive/

function firstMissingPositive(nums) {
    nums.sort((a, b) => a - b)
    const array = nums.filter(numb => numb > 0)
    if (array[0] !== 1) {
        return 1
    }
    for (let i = 0; i < array.length - 1; i++) {
        let add = array[i + 1] - array[i]
        if (add !== 1) {
            return array[i] + 1
        }
        return array[array.length - 1] + 1
    }
}

firstMissingPositive([3, 4, 1])

module.exports = firstMissingPositive