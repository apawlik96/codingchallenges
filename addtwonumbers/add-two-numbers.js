function addTwoNumbers(arrayOne, arrayTwo) {
    const numbOne = conversionArrayToNumb(arrayOne)
    const numbTwo = conversionArrayToNumb(arrayTwo)
    return numbOne + numbTwo
}

function conversionArrayToNumb(array){
    const arrayReverse = array.reverse()
    const arrayJoin = arrayReverse.join('')
    return parseInt(arrayJoin)
}

addTwoNumbers([2,4,3],[5,6,4])

module.exports = addTwoNumbers
