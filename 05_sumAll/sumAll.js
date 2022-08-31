const sumAll = function(num1, num2) {
    let sumtotal = 0;
    
    if(typeof num1 == "number" && typeof num2 == "number" && num1>=0 && num2 >=0 ){
        
        sum1 = (num1 *(num1 + 1))/2
        sum2 = (num2 * (num2 + 1))/2
        sumtotal = Math.abs(sum1 - sum2) + 1
    }
    else{
        return "ERROR"
    }
    return sumtotal; 
};

// Do not edit below this line
module.exports = sumAll;
