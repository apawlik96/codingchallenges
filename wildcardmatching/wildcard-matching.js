// https://leetcode.com/problems/wildcard-matching/description/

function wildcardMatching (s,p) {
    if (p === "*" || p === s){
        return true
    }
    for(let i=0; i<s.length; i++){
        var idx = i
        if(p.charAt(i) === "?"){
        var pReplace = p.replace("?","")
        }
    }
    const removeLetter = s.charAt(idx)
    const sReplace = s.replace(removeLetter,"")
    if (sReplace === pReplace) {
        return true
    }
}

wildcardMatching("ab","a?")

module.exports = wildcardMatching