// https://leetcode.com/problems/longest-valid-parentheses/
function longestValidParentheses(s) {
    var result = 0;
    const array = s.split('')
    for (let i=0; i<array.length; i++){
        if (array[i] === "(" && array[i+1] === ")"){
            result+=2
        }
    }
    return result
}

longestValidParentheses("")

module.exports = longestValidParentheses