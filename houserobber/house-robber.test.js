const houseRobber = require('./house-robber');

test('calculate maximum amount how you can rob of house', () => {
    expect(houseRobber([1,2,3,1])).toBe(4)
})

test('calculate maximum amount how you can rob of house', () => {
    expect(houseRobber([2,7,9,3,1])).toBe(12)
})