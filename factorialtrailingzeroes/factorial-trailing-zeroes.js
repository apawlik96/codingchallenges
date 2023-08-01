// https://leetcode.com/problems/factorial-trailing-zeroes/
function factorialTrailingZeroes (n) {
    if (n === 0) return n
    let array = []
    for(let i=1; i<=n; i++){
        array.push(i)
    }
    let result = array.reduce((a,b) => a*b).toString()
    let sum = 0
    for(let i=0; i<result.length; i++){
        if (result.charAt(i) == 0) sum+=1
    }
    return sum
}

factorialTrailingZeroes(5)

module.exports = factorialTrailingZeroes