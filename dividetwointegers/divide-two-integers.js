function divideTwoIntegers(dividend, divisor) {
    const numb = divisor.charAt(0)
    var result = 0;
    if (numb === '-') {
        var multi = -1 * divisor
        for (var i = 0; i <= dividend; i++) {
            dividend -= multi
            result += 1
        }
        return "-" + result
    } else if (numb !== "-") {
        for (var i = 0; i <= dividend; i++) {
            dividend -= divisor
            result += 1
        }
        return result
    }
}

divideTwoIntegers("7", "-3")

module.exports = divideTwoIntegers