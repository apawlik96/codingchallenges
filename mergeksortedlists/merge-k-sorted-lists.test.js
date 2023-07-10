const mergeKSortedLists = require('./merge-k-sorted-lists');

test('merge all arrays into one sorted' , () =>{
    expect(mergeKSortedLists([[1,4,5],[1,3,4],[2,6]])).toStrictEqual(["1", "1", "2", "3", "4", "4", "5", "6"])
})
test('return an empty array' , () =>{
    expect(mergeKSortedLists([[]])).toStrictEqual([])
})