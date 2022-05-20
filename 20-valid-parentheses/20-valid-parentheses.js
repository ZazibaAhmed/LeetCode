var isValid = function(s) {
    var stack = [];
    var split = s.split('');
    let valid = '';
    if(split.length%2===0){
        for(let i=0; i<split.length; i++){
        const char = split[i];
        if(char==='(' || char==='{' || char==='['){
            stack.push(char);  
        } else{
            const popped = stack.pop();
            const string = `${popped}${char}`
            console.log( string );
            if(string ==='()'||string ==='{}'||string ==='[]'){
                console.log('HEre', stack);
                valid = true && stack.length === 0;
            }else{
                valid = false;
                break;
            }
        }
    }
        return valid;
    }else{
        return false;
    }
    
};

