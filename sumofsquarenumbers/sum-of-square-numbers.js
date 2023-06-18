// https://leetcode.com/problems/sum-of-square-numbers/description/
function sumOfSquareNumbers (c){
    let numb = []
    for (let i=0; i<c; i++){
        numb.push(i)
    }
    let result = []
    for (let i=0; i<numb.length-1; i++) {
        let squareOne= numb[i] * numb[i]
        let squareTwo= numb[i+1] * numb[i+1]
        let sum = squareOne + squareTwo
        if(sum === c) result.push(sum)
    }
    return result.length === 1 ? true : false
}

sumOfSquareNumbers(3)
