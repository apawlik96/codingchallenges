const countPrimes = require('./count-primes');

test('return the number of prime numbers', () => {
    expect(countPrimes(10)).toBe(4)
})

test('return the number of prime numbers', () => {
    expect(countPrimes(0)).toBe(0)
})