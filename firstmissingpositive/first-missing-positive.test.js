const firstMissingPositive = require('./first-missing-positive')

test('return the smallest missing positive integer' , () =>{
    expect(firstMissingPositive([1,2,0])).toEqual(3)
})
test('return the smallest missing positive integer' , () =>{
    expect(firstMissingPositive([3,4,-1,1])).toEqual(2)
})