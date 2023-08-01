const factorialTrailingZeroes = require('./factorial-trailing-zeroes');

test('return the number of trailing zeroes' , () =>{
    expect(factorialTrailingZeroes(3)).toBe(0)
})
test('return the number of trailing zeroes' , () =>{
    expect(factorialTrailingZeroes(5)).toBe(1)
})