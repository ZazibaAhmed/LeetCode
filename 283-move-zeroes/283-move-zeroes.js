/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    let size = nums.length;
    for(let i=0; i<size; i++){
        if(nums[i]===0){
            count=count+1;
            nums.splice(i,1);
            nums.push(0);
            i--;
            size--;
        }
    }
    // for(let k=0; k<count; k++){
    //     nums.push(0);
    // } 
};