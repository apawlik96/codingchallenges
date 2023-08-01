const simplifyPath = require('./simplify-path');

test('return the simplified canonical path' , () =>{
    expect(simplifyPath("/home/")).toBe("/home")
})
test('return the simplified canonical path' , () =>{
    expect(simplifyPath("/../")).toBe("/")
})