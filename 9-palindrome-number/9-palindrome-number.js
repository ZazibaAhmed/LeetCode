var isPalindrome = function(x) {
    const array = x.toString().split('');
    let j = array.length -1;
    // const reversedArray = [...array].reverse();
    return array.every((elem, index) =>elem===array[j--]);  
};