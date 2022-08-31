const getTheTitles = function(arr) {
    let newarr = [];
    for(let i = 0; i < arr.length; i ++){
        newarr.push(arr[i].title);
    }
    return newarr;
};

// Do not edit below this line
module.exports = getTheTitles;
