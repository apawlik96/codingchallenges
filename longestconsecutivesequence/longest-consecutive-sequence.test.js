const longestConsecutiveSequence = require('./longest-consecutive-sequence');

test('return the length of the longest consecutive elements sequence', () => {
    expect(longestConsecutiveSequence([100,4,200,1,3,2])).toBe(4)
})

test('return the length of the longest consecutive elements sequence', () => {
    expect(longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1])).toBe(9)
})