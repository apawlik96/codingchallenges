// https://leetcode.com/problems/reverse-words-in-a-string/
function reverseWordsInAString(string){
    const array = string.split(' ')
    const result = []
    array.forEach(el => {
        if(el !== ""){
        result.push(el)
    }
    })
    return result.reverse().join(' ')
}

reverseWordsInAString("  hello world  ")
