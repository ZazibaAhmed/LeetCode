var isPalindrome = function(x) {
    const array = x.toString().split('');
    let j = array.length -1;
    return array.every((elem, index) =>elem===array[j--]);  
};