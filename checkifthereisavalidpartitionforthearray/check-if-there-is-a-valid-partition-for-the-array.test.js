const checkIfThereIsAValidPartitionForTheArray = require('./check-if-there-is-a-valid-partition-for-the-array');

test('check if the array has at least one valid partition', () => {
    expect(checkIfThereIsAValidPartitionForTheArray([4,4,4,5,6])).toBeTruthy()
})

test('check if the array has at least one valid partition', () => {
    expect(checkIfThereIsAValidPartitionForTheArray([1,1,1,2])).toBeFalsy()
})