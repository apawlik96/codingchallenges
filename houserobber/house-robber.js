function houseRobber (nums) {
    let sumOne = 0;
    let sumTwo = 0;
    for(let i=0; i<nums.length; i++){
        if(i % 2 === 0){
            sumOne += nums[i]
        } else if (i % 2 !==0){
            sumTwo += nums[i]
        }
    }
    return Math.max(sumOne,sumTwo)
}

houseRobber([1,2,3,0])
