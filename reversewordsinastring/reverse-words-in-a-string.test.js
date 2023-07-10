const reverseWordsInAString = require('./reverse-words-in-a-string');

test('return reversed words with a single space between them' , () => {
    expect(reverseWordsInAString("  hello world  ")).toBe("world hello")
})
test('return reversed words with a single space between them' , () => {
    expect(reverseWordsInAString("the sky is blue")).toBe("blue is sky the")
})