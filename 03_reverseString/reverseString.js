const reverseString = function(string) {
    let retString = '';
    let length = string.length;
    for(i = length - 1; i >= 0; i--){
        retString += string[i];
    }
    return retString;
};

// Do not edit below this line
module.exports = reverseString;
