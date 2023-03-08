function removingStarsFromAString (s){
    const array = s.split('')
    array.reverse()
    for(var i=0; i<s.length; i++){
        let index = array.indexOf(array[i])
        if (array[i] === "*" && array[i+1] === "*"){
            array.splice(index,4)
        } else if(array[i] === "*"){
            array.splice(index,2)
        }
    }
    array.reverse()
    return array
}

removingStarsFromAString ("leet**cod*e")
