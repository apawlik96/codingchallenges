function removingStarsFromAString(s) {
    let letters = [];
    for (const char of s)
        char === "*" ? letters.pop() : letters.push(char);
    return letters.join("");

}

removingStarsFromAString("leet**cod*e");

module.exports = removingStarsFromAString