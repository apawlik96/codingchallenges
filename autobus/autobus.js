// https://codeforces.com/problemset/problem/1679/a ZROBIONE
function autobus(numberOfWheels){
    if (numberOfWheels % 4 === 0){
        console.log("Liczba autobusów z 2 osiami: " + numberOfWheels / 4)
    }
    if(numberOfWheels % 6 === 0) {
        console.log("Liczba autobusów z 3 osiami: " + numberOfWheels / 6)
    }
    var sumOfWheels = Math.floor(numberOfWheels / 10) * 10
    var remainder = numberOfWheels - sumOfWheels
    var sumOfBus = sumOfWheels / 10
    var numberWithTwoAxles = remainder / 4
    var numberWithThreeAxles = remainder / 6
    var sum = 0
    if(remainder % 4 === 0){
        var sum = sumOfBus + numberWithTwoAxles
        console.log("Liczba autobusów z 3 osiami: " + sumOfBus + ", Liczba autobusów z 2 osiami: " + sum )
    } else if (remainder % 6 === 0){
        var sum = sumOfBus + numberWithThreeAxles
        console.log("Liczba autobusów z 3 osiami: " + sumOfBus + ", Liczba autobusów z 2 osiami: " + sum)
    }
}

autobus(24)
