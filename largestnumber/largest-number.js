// https://leetcode.com/problems/largest-number/
function largestNumber (nums) {
    nums.sort().reverse()
    let array = []
    let lastIdx = []
    nums.forEach(numb => {
        numb % 10 !== 0 ? array.push(numb) : lastIdx.push(numb)
    })
    let result = array.concat(lastIdx)
    return result.join("") 
}

largestNumber([10,2])

module.exports = largestNumber