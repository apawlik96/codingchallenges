const findMedianFromDataStream = require('./find-median-from-data-stream');

test('returns the median of all elements so far' , () =>{
    expect(findMedianFromDataStream(["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"],[[], [1], [2], [], [3], []])).toStrictEqual([null, null, null, 1.5, null, 2])
})
