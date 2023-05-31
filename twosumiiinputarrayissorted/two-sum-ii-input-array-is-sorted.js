// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
function twoSumIIInputArrayIsSorted (numbers, target) {
    var sum = 0;
    let result = [];
    for(const numb of numbers){
        var sum = numbers[0] + numb
        let firstValue = numbers.indexOf(numbers[0]) + 1
        let secondValue = numbers.indexOf(numb) + 1
        if(sum === target ){
            result.push(firstValue , secondValue) 
            return result
        } 
    }
}

twoSumIIInputArrayIsSorted([2,7,11,15], 9)

module.exports = twoSumIIInputArrayIsSorted