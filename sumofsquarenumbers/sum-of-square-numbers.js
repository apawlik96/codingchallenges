// https://leetcode.com/problems/sum-of-square-numbers/description/
function sumOfSquareNumbers (c){
    let numb = []
    for (let i=0; i<c; i++){
        numb.push(i)
    }
    let result = []
    for (let i=0; i<numb.length-1; i++) {
        const squareOne= numb[i] * numb[i]
        const squareTwo= numb[i+1] * numb[i+1]
        const sum = squareOne + squareTwo
        if(sum === c) result.push(sum)
    }
    return result.length === 1 ? true : false
}

sumOfSquareNumbers(3)

module.exports = sumOfSquareNumbers