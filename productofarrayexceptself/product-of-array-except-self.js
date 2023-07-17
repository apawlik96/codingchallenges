// https://leetcode.com/problems/product-of-array-except-self/
function productOfArrayExceptSelf(nums) {
    let result = [];
    let idx = nums.indexOf(0)
    let tabWithZero = [];
    nums.forEach((numb )=> {
        if(numb !== 0) tabWithZero.push(numb)
    })
    let numMultiply = tabWithZero.reduce((a,b) => a*b)
    nums.forEach(numb => {
        nums.length === tabWithZero.length ? result.push(numMultiply / numb) : result.push(0)
    })
    if(nums.length !== tabWithZero.length) result.splice(idx,1,numMultiply)
    return result
}

productOfArrayExceptSelf([-1,1,0,-3,3])

module.exports = productOfArrayExceptSelf