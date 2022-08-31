const findTheOldest = function(arr) {
    let date = new Date();
    let yearnow = date.getFullYear();
    let newVal = 0
    let min = 0;
    let mm;
    for(let i = 0; i < arr.length; i++ ){
        if(arr[i].yearOfDeath){
            newVal = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
        else{
            newVal = yearnow - arr[i].yearOfBirth;
        }
        if(newVal > min){
            min = newVal;
            mm = arr[i];
        }
    }
    return mm;
};

// Do not edit below this line
module.exports = findTheOldest;
