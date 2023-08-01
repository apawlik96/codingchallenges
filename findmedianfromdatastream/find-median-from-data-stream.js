// https://leetcode.com/problems/find-median-from-data-stream/description/
function findMedianFromDataStream (arrTask, arrNumb) {
    let result = []
    let indexOfArrTask = arrTask.indexOf("findMedian")
    let lastIndexOfArrTask = arrTask.lastIndexOf("findMedian")
    let firstMedian = arrNumb.slice(0, indexOfArrTask).flat()
    let arrNumbFlat = arrNumb.flat()
    for (let i=0; i<arrTask.length; i++){
        arrTask[i] === "findMedian" ? result.push(median(firstMedian)) : result.push(null)
    }
    if(indexOfArrTask !== lastIndexOfArrTask){
        result.splice(lastIndexOfArrTask,1,median(arrNumbFlat))
    } 
    return result
}

function median(array) {
    if(array.length %2 ===0) return array.reduce((a,b) => (a+b)/2)
    return array[Math.floor(array.length/2)]
}

findMedianFromDataStream(["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"] , [[], [1], [2], [], [3], []])

module.exports = findMedianFromDataStream