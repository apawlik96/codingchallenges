const repeatedDNSequences = require('./repeated-dna-sequences');

test('return all the 10-letter-long sequences' , () =>{
    expect(repeatedDNSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")).toStrictEqual(["AAAAACCCCC", "AAAAACCCCC", "CAAAAAGGGT"])
})
test('return all the 10-letter-long sequences' , () =>{
    expect(repeatedDNSequences("AAAAAAAAAAAAA")).toStrictEqual(["AAAAAAAAAA"])
})