function addTwoNumbers(arrayOne, arrayTwo) {
    const numbOne = conversionArrayToNumb(arrayOne)
    const numbTwo = conversionArrayToNumb(arrayTwo)
    var sum = numbOne + numbTwo
    return sum 
}

function conversionArrayToNumb(array){
    const arrayReverse = array.reverse()
    const arrayJoin = arrayReverse.join('')
    const numb = parseInt(arrayJoin)
    return numb 
}

console.log(addTwoNumbers([2,4,3],[5,6,4]))
