// https://codeforces.com/problemset/problem/1679/a 
function autobus(numberOfWheels){
    if (numberOfWheels % 4 === 0){
        return "Liczba autobusów z 2 osiami: " + numberOfWheels / 4
    }
    if(numberOfWheels % 6 === 0) {
        return "Liczba autobusów z 3 osiami: " + numberOfWheels / 6
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
        return "Liczba autobusów z 3 osiami: " + sumOfBus + ", Liczba autobusów z 2 osiami: " + sumTwoAxles
    } else if (remainder % 6 === 0){
        var sumThreeAxles = sumOfBus + numberWithThreeAxles
        return "Liczba autobusów z 3 osiami: " + sumOfBus + ", Liczba autobusów z 2 osiami: " + sumThreeAxles
    }
}

autobus(24)
