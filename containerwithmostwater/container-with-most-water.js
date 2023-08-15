// https://leetcode.com/problems/container-with-most-water/
function containerWithMostWater (height) {
    let mathMaxHeight = Math.max(...height)
    let indexOfMax = height.indexOf(mathMaxHeight)
    let indexOfLastMax = height.lastIndexOf(mathMaxHeight)
    let lastIndex = height[height.length-1]
    let firstValue = mathMaxHeight * (indexOfLastMax - indexOfMax)
    let secondValue = Math.min(mathMaxHeight,lastIndex ) * ((height.length-1) - indexOfMax)
    return Math.max(firstValue,secondValue)
}

containerWithMostWater([1,8,6,2,5,4,8,3,7])

module.exports = containerWithMostWater
