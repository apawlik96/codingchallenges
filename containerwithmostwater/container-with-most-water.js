// https://leetcode.com/problems/container-with-most-water/
function containerWithMostWater (height) {
    const mathMaxHeight = Math.max(...height)
    const indexOfMax = height.indexOf(mathMaxHeight)
    const indexOfLastMax = height.lastIndexOf(mathMaxHeight)
    const lastIndex = height[height.length-1]
    const firstValue = mathMaxHeight * (indexOfLastMax - indexOfMax)
    const secondValue = Math.min(mathMaxHeight,lastIndex ) * ((height.length-1) - indexOfMax)
    return Math.max(firstValue,secondValue)
}

containerWithMostWater([1,8,6,2,5,4,8,3,7])

module.exports = containerWithMostWater
