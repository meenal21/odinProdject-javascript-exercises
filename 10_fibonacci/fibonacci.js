const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    let c;
    num = Number(num);
    if(num == 1 || num == 2){
        return 1;
    }
    else if(num < 1){
        return "OOPS"
    }
    else{
        for(let i = 3; i <= num; i++){
            c = a+b;
            a = b;
            b = c;
        }
        return c;
    }
};

// Do not edit below this line
module.exports = fibonacci;
