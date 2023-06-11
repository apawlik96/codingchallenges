// https://leetcode.com/problems/contains-duplicate-iii/
function containsDuplicateIII(nums, indexDiff, valueDiff){
    return indexDiff !== valueDiff && indexDiff - valueDiff <= valueDiff && nums[indexDiff] - nums[valueDiff] <= valueDiff ? true : false
}

containsDuplicateIII([1,2,3,1], 0, 3)
