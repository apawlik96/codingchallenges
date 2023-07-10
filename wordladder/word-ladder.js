// https://leetcode.com/problems/word-ladder/description/
function wordLadder (beginWord, endWord, wordList) {
    if(wordList.filter(numb => numb !== endWord).length === wordList.length ) return 0
    const idxEndWord = wordList.indexOf(endWord)
    const idxBeginWord = wordList.indexOf(beginWord)
    for(const elem of wordList){
        return beginWord === elem ? idxEndWord - idxBeginWord : idxEndWord
    }
}

wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"])
