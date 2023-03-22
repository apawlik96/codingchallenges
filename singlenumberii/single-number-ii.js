function singleNumberII(nums) {
    nums.sort();
    if(nums[nums.length-1] !== nums[nums.length-2] || nums[0] !== nums[1]){
        return nums[nums.length-1]
    }
    for(let i=0; i<nums.length-1; i++){
        if(nums[i-1] !== nums[i] && nums[i] !== nums[i+1]){
            return nums[i]
        }
    }
}

singleNumberII([2,2,2,3,4,4])
