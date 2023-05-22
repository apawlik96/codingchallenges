function swapNodesInPairs (head) {
    if (head.length <= 1){
        return head
    }
    const array = []
    const arrayOne = []
    const arrayTwo = []
	for (var i=0; i<head.length; i++){
        if (i % 2 === 0){
            arrayOne.push(head[i])
        } else {
            arrayTwo.push(head[i])
        }
    }
    for (var i=0; i<arrayOne.length; i++){
        array.push(arrayTwo[i],arrayOne[i])
    }
    return array
}

swapNodesInPairs ([1,2,3,4])

module.exports = swapNodesInPairs
