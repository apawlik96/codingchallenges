// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
function twoSumIIInputArrayIsSorted (numbers, target) {
    var sum = 0;
    const result = [];
    for(let i=0;i <numbers.length; i++){
        var sum = numbers[0] + numbers[i]
        var firstValue = numbers.indexOf(numbers[0]) + 1
        var secondValue = numbers.indexOf(numbers[i]) + 1
        if(sum === target ){
            result.push(firstValue , secondValue) 
            return result
        } 
    }
}

twoSumIIInputArrayIsSorted([2,7,11,15], 9)
