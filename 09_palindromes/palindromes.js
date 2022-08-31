const palindromes = function (string) {
    let str = string.toLowerCase();
    let regex = new RegExp('[a-zA-Z]');
    for(let i = 0, j = str.length - 1; j > i; i++, j--){
        while(!regex.test(str[i])){
            i++;
        }
        while(!regex.test(str[j])){
            j--;
        }
        if(str[i] != str[j]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
