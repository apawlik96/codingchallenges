const wildcardMatching = require('./wildcard-matching')

test('check if the 2 strings are the same', () =>{
    expect(wildcardMatching("aa","a")).toBeFalsy()
})
test('check if the 2 strings are the same', () =>{
    expect(wildcardMatching("ab","a?")).toBeTruthy()
})