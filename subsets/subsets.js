// https://leetcode.com/problems/subsets/description/
function subsets (nums){
    let result = []
    nums.length === 1 ? result.push([]) : result.push([],[nums])
    for (let i=0; i<nums.length; i++){
        result.push([nums[i]])
        for(let j=0; j<i; j++){
            result.push([nums[j]].concat(nums[i]))
        }
    }
    return result 
}

subsets([1,2,3])
