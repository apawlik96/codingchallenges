const removingStarsFromAString = require('./removing-stars-from-a-string')

test('remove all * and letters: etd before * from string' , () => {
    expect(removingStarsFromAString("leet**cod*e")).toBe("lecoe")
})
  test('remove all * letters from string' , () => {
    expect(removingStarsFromAString("erase*****")).toBe("")
})