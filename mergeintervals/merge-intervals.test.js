const mergeIntervals = require('./merge-intervals');

test('merge all overlapping intervals and return an array of non-overlapping intervals', () => {
    expect(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])).toStrictEqual([[1,6],[8,10],[15,18]])
})

test('merge all overlapping intervals and return an array of non-overlapping intervals', () => {
    expect(mergeIntervals([[1,4],[4,5]])).toStrictEqual([[1,5]])
})