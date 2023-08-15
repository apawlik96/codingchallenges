// https://leetcode.com/problems/merge-intervals/
function mergeIntervals (intervals) {
    let result = []
    let remainder = []
    for (let i=0; i<intervals.length-1; i++){
        let array = intervals[i].concat(intervals[i+1])
        array.splice(1,2)
        intervals[i][1] >= intervals[i+1][0] ? result.push(array) : remainder.push(intervals[i+1])
    }
    return result.concat(remainder)
}

mergeIntervals([[1,3],[2,6],[8,10],[15,18]])

module.exports = mergeIntervals
