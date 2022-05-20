var isPalindrome = function(x) {
    const array = x.toString().split('');
    const reversedArray = [...array].reverse();
    console.log(array, reversedArray);
    return array.every((elem, index) =>elem===reversedArray[index]);  
};