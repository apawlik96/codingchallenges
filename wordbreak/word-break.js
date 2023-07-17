// https://leetcode.com/problems/word-break/description/
function wordBreak(s, wordDict) {
    let string = wordDict.join("")
    if (s === string) return true
    let tab = [];
    const array = Array.from(s);
		while(array.length) {
			tab.push(array.splice(0,string.length).join(""))
		}
    let sum = 0
    for (let i = 0; i < wordDict.length; i++) {
        if (tab[i] === string) sum +=1
        if (sum === tab.length) return true
        if (sum === tab.length-1 && tab[tab.length-1] === wordDict[0]) return true
    }
    return false
} 

wordBreak("leetcode", ["leet","code"])

module.exports = wordBreak