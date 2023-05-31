const swapNodesInPairs = require('./swap-nodes-in-pairs');

test('replace every second index of array', () => {
    expect(swapNodesInPairs([1,2,3,4])).toStrictEqual([2,1,4,3])
})

test('return an empty array', () => {
    expect(swapNodesInPairs([])).toStrictEqual([])
})