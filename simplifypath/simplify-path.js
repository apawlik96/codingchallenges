// https://leetcode.com/problems/simplify-path/
function simplifyPath (string) {
    let result = []
    if(string.charAt(0) === "/") result.push(string.charAt(0))
    for(let i=1; i<string.length; i++){
        if(string.charAt(i) === "/" && string.charAt(i+1) === "/") result.push(string.charAt(i))
        if(string.charAt(i) !== "/" && string.charAt(i) !== ".") result.push(string.charAt(i))
    
    }
    return result.join('')
} 
    
simplifyPath("/home/")

module.exports = simplifyPath