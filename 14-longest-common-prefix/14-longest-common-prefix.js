/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length !== 0){
        let arr = strs.sort()[0].split('');
        let string = ''
        let prefix = ''
        for (let i=0; i<arr.length; i++) {
           string = string + arr[i];
           if(strs.every(word => word.startsWith(string))) {
               prefix = string
           }else{
               return prefix
           }
        }
        
        return prefix
        
    } else {
        return ""
    }
    
    
};