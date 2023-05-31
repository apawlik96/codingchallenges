const firstMissingPositive = require('./first-missing-positive');

test('return 3' , () =>{
    expect(firstMissingPositive([1,2,0])).toBe(3)
})

test('return 2' , () =>{
    expect(firstMissingPositive([3,4,-1,1])).toBe(2)
})