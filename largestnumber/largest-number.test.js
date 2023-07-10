const largestNumber = require('./largest-number');

test('return the largest number from non-negative integers', () => {
    expect(largestNumber([10,2])).toBe("210")
})

test('return the largest number from non-negative integers', () => {
    expect(largestNumber([3,30,34,5,9])).toBe("9534330")
})