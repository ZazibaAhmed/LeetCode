/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let i=0; i<nums.length; i++){
        let double = false;
        if(nums[i]!==null){
            for(let j=i+1; j<nums.length; j++){
                if(nums[i]===nums[j]){
                    double = true;
                    nums[i]=null;
                    nums[j]=null;
                    break;
                }
            }
            if(!double){
                return nums[i]
            }
        }
    }
};