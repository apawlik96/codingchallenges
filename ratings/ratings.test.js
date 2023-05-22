const candy = require('./ratings')

test('return the minimum number of candies' , () => {
    expect(candy([1,0,2])).toBe(5)
})
test('return the minimum number of candies' , () => {
    expect(candy([1,2,2])).toBe(4)
})