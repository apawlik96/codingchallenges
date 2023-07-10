// https://leetcode.com/problems/contains-duplicate-iii/
function containsDuplicateIII(nums, indexDiff, valueDiff){
    let result = []
    if (indexDiff !== valueDiff) result.push(1)
    if (indexDiff - valueDiff <= valueDiff) result.push(1)
    if (nums[indexDiff] - nums[valueDiff] <= valueDiff ) result.push(1)
    return result.length ===3 ? true : false
}

containsDuplicateIII([1,2,3,1], 0, 3)

module.exports = containsDuplicateIII