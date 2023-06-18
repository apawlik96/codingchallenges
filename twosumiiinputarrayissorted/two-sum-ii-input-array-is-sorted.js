// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
function twoSumIIInputArrayIsSorted (numbers, target) {
    let result = []
    for(let i=0; i<numbers.length; i++){
        if(numbers[0] + numbers[i] === target ) result.push(0,i)
    }
    return result
}

twoSumIIInputArrayIsSorted([2,7,11,15], 9)

module.exports = twoSumIIInputArrayIsSorted