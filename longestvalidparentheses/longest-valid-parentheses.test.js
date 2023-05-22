const longestValidParentheses = require('./longest-valid-parentheses')

test('return the length of the longest valid parentheses substring' , () => {
    expect(longestValidParentheses("(()")).toBe(2)
})
test('return 0' , () => {
    expect(longestValidParentheses("")).toBe(0)
})