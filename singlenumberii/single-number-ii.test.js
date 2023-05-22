const singleNumberII = require('./single-number-ii')

test('return a single element from an array' , () => {
    expect(singleNumberII([2,2,3,2])).toBe(3)
})
test('return an empty array', () =>{
    expect(singleNumberII([0,1,0,1,0,1,99])).toBe(99)
})