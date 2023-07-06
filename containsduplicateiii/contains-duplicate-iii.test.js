const containsDuplicateIII = require('./contains-duplicate-iii');

test('check if there is a pair', () => {
    expect(containsDuplicateIII([1,2,3,1],0,3)).toBeTruthy()
})

test('check if there is a pair', () => {
    expect(containsDuplicateIII([1,5,9,1,5,9],2,3)).toBeFalsy()
})