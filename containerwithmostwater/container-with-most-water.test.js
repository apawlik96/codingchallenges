const containerWithMostWater = require('./container-with-most-water');

test('return the maximum amount of water a container can store', () => {
    expect(containerWithMostWater([1,8,6,2,5,4,8,3,7])).toBe(49)
})

test('return the maximum amount of water a container can store', () => {
    expect(containerWithMostWater([1,1])).toBe(1)
})