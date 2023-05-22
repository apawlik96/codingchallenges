const divideTwoIntegers = require('./divide-two-integers');

test('divide two integers, 10 by 3' , () =>{
    expect(divideTwoIntegers("10","3")).toBe(3)
})

test('divide two integers, 7 by -3' , () =>{
    expect(divideTwoIntegers("7","-3")).toBe("-2")
})