/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let reversedArr = digits.reverse();
    let carry = 0;
    let plusOne = reversedArr[0]+1;
    // if( plusOne > 9 ){
        carry = plusOne > 9 ? 1 : 0;
        reversedArr[0] = plusOne > 9 ? String(plusOne).split('')[1] : plusOne;
        reversedArr = reversedArr.map(Number)
        for(let i=1; i<reversedArr.length; i++){
            if(reversedArr[i]+carry>9){

                let sum = reversedArr[i]+carry;
                reversedArr[i] = Number(String(sum).split('')[1]);
                carry = 1;
                console.log(i,reversedArr);
            }else{
                reversedArr[i] = reversedArr[i]+carry;
                carry = 0;
                return reversedArr.reverse();
            }
            console.log(reversedArr);
        }
        if(carry===1){
            reversedArr.push(1);
        }
        return reversedArr.reverse();
    // }else{
    //     reversedArr[0] = plusOne;
    //     return reversedArr.reverse();
    // }
};