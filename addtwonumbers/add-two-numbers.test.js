const addTwoNumbers = require('./add-two-numbers');

test('reverse the order of the arrays, join this value into one number and return sum of these numbers', () => {
    expect(addTwoNumbers([2,4,3],[5,6,4])).toBe(807)
})

test('return 0', () => {
    expect(addTwoNumbers([0],[0])).toBe(0)
})