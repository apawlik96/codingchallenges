// https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/
function checkIfThereIsAValidPartitionForTheArray (nums){
    let result = 0
    const set = new Set (nums)
    if(set.size >= 3) result += 1
    const array = []
    nums.forEach((numbOne, numbTwo) => {
        if(numbOne === numbTwo) array.push(numbOne)
    })
    if(array.length <=2) result +=1
    if (result === 2) return true
    return false
}

checkIfThereIsAValidPartitionForTheArray([4,4,4,5,6])

module.exports = checkIfThereIsAValidPartitionForTheArray
