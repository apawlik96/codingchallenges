function countPrimes(n){
	if(n === 0 || n === 1) return 0
	let array = [];
    for(let i=0; i<n; i++){
        array.push(i+1)
    }
    let tab = array.filter((numb) => numb % 2 !== 0)
    let result = tab.filter((numb) => numb % 3 !== 0)
    return result.length+1
}

countPrimes(10)

module.exports = countPrimes
