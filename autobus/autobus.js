// https://codeforces.com/problemset/problem/1679/a 
function autobus(numberOfWheels){
    let result = []
    if (numberOfWheels % 4 === 0){
        result.push("Number of buses with 2 axles: " + numberOfWheels / 4 )
    }
    if(numberOfWheels % 6 === 0) {
        result.push("Number of buses with 3 axles: " + numberOfWheels / 6)
    }
    const sumOfWheels = Math.floor(numberOfWheels / 10) * 10
    const remainder = numberOfWheels - sumOfWheels
    const sumOfBus = sumOfWheels / 10
    const numberWithTwoAxles = remainder / 4
    const numberWithThreeAxles = remainder / 6
    var sumTwoAxles = 0
    var sumThreeAxles = 0
    if(remainder % 4 === 0){
        var sumTwoAxles = sumOfBus + numberWithTwoAxles
        result.push("Number of buses with 3 axles: " + sumOfBus + ", Number of buses with 2 axles: " + sumTwoAxles)
    } else if (remainder % 6 === 0){
        var sumThreeAxles = sumOfBus + numberWithThreeAxles
        result.push("Number of buses with 3 axles: " + sumOfBus + ", Number of buses with 2 axles: " + sumThreeAxles)
    }
    return result
}

autobus(24)

module.exports = autobus