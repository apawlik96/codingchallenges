function firstMissingPositive (nums) {
    for(var i=0; i<nums.length; i++){
        if(nums[i] !== 1){
            return 1
        } else {
            arr(nums)
        }
    }
}

function arr (array) {
    array.filter( numb =>{
        return numb > 0
    })
    var add = 0;
    for (var i=0; i<array.length-1; i++) {
        var add = array[i+1] - array[i]
        if(add !==1){
            return array[i] + 1
        }
    }
}

firstMissingPositive([3,4,1])
