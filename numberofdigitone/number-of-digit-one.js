// https://leetcode.com/problems/number-of-digit-one/description/
function numberOfDigitOne(n) {
    if (n === 0 || n === 1){
        return 0
    }
    let array = []
    for (let i=2; i<=n; i++){
        array.push(i)
    }
    return array.filter(numb => numb % 2 !==0 && numb % 3 !==0).length+2
}

numberOfDigitOne(13)
