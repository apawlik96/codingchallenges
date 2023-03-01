// function removingStarsFromAString (s){
//     const array = s.split('')
//     array.reverse()
//     for(var i=0; i<s.length; i++){
//         let index = array.indexOf(array[i])
//         if (array[i] === "*" && array[i+1] === "*"){
//             array.splice(index,4)
//         } else if(array[i] === "*"){
//             array.splice(index,2)
            
//         }
//     }
//     array.reverse()
//     console.log(array)
// }

// removingStarsFromAString ("leet**cod*e")


// function removingStarsFromAString(s){
//     const array = [];
//     for(var i=0; i<s.length; i++){
//         if( )
//     }
// }

// removingStarsFromAString("erase*****")


// function removingStarsFromAString (s) {
//     let op=[];
//     for(let i=0;i<s.length;i++){
//         if(s[i]==='*'){
//             op.pop();
//         }else{
//             op.push(s[i])
//         }
//     }
//     console.log(op.join(""))
// };

// removingStarsFromAString ("erase****")



function divideTwoIntegers (dividend, divisor) {
    const numb = divisor.charAt(0)
    var result = 0;
    if (numb === '-'){
        var multi = -1 * divisor 
        for (var i=0; i<=dividend;i++){
            dividend -= multi
            result += 1
        }
        console.log(-result)
    } else if(numb !== "-"){
        for (var i=0; i<=dividend;i++){
            dividend -= divisor
            result += 1
    }
    console.log(result)
    }
}

divideTwoIntegers ("7","-3")
