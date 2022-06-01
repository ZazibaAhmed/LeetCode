/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0){
            count=count+1;
        }
    }
    for(let j=0; j<nums.length; j++){
        if(nums[j]===0){
            nums.splice(j,1);
            console.log(nums);
            j--;
        }

    }

    console.log('last',nums)
    for(let k=0; k<count; k++){
        nums.push(0);
    } 
};