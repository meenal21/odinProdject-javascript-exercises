const repeatString = function(string, num) {
    let dum = ''
    if(num >= 0){
        for(let i = 0; i < num; i ++){
            dum += string
        }
    }
    else{
        dum = 'ERROR'
    }
    return dum
};

// Do not edit below this line
module.exports = repeatString;
