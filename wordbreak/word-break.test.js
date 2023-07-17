const wordBreak = require('./word-break');

test('check if string can be segmented into a space-separated sequence of one or mor dictionary words', () => {
    expect(wordBreak("leetcode",["leet","code"])).toBeTruthy()
})

test('check if string can be segmented into a space-separated sequence of one or mor dictionary words', () => {
    expect(wordBreak("catsandog","cats","dog","sand","and","cat")).toBeFalsy()
})