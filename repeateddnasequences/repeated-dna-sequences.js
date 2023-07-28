// https://leetcode.com/problems/repeated-dna-sequences/
function repeatedDNSequences(s){
    let result = []
    const array = Array.from(s);
    while(array.length) {
        result.push(array.splice(0,10).join(""))
    }
    return result.filter((element) => element.length === 10)

}

repeatedDNSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")

module.exports = repeatedDNSequences