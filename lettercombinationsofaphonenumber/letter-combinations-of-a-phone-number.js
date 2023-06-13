// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

function letterCombinationsOfAPhoneNumber(digits) {
    const letter = new Map( [
        [2, ["a" , "b" , "c"]],
        [3, ["d" , "e" , "f"]],
        [4, ["g" , "h" , "i"]],
        [5, ["j" , "k" , "l"]],
        [6, ["m" , "n" , "o"]],
        [7, ["p" , "q" , "r" , "s"]],
        [8, ["t" , "u" , "v"]],
        [9, ["w" , "x" , "y", "z"]]
    ])
    let numbOne = Number(digits.toString().charAt(0));
    let numbTwo = Number(digits.toString().charAt(1));
    let arrOne = letter.get(numbOne)
    let arrTwo = letter.get(numbTwo)
    if(digits.length === 1) return arrOne
    let result = [];
    for (let i=0; i<arrOne.length; i++){
        for(let j=0; j<arrTwo.length; j++){
            result.push([arrOne[i]].concat(arrTwo[j]))
        }
    }
    return result
}

letterCombinationsOfAPhoneNumber("23")
