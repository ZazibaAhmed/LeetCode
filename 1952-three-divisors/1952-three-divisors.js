/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count = 0;
    for(let i=2; i<n; i++){
        if(count>1){
            return false;
        }
        if(n%i===0){
            count++;
        }
    }
    if(count===1){
        return true;
    }else{
        return false;
    }
};