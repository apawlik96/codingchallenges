const sumOfSquareNumbers = require('./sum-of-square-numbers');

test('check if the sum of two squared numbers id equal to the target', () => {
    expect(sumOfSquareNumbers(5)).toBeTruthy()
})

test('check if the sum of two squared numbers id equal to the target', () => {
    expect(sumOfSquareNumbers(3)).toBeFalsy()
})