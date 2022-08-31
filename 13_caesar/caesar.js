const caesar = function(str, num) {
    let str1 = "";
    num = num%26;
    let val = 0;
    let regex = new RegExp('[a-z]')
    let regex2 = new RegExp('[A-Z]')
    for(let i = 0; i <  str.length; i++){
        val = str[i].charCodeAt(0)
        if(regex.test(str[i])){ 
            if(val + num > 122){
                str1 += String.fromCharCode(val+num - 122 + 96);
            }
            else if(val + num < 97){
                str1 += String.fromCharCode(123 - (97 - val + num))
            }
            else{
                str1 += String.fromCharCode(val + num );
            }
        }
        else if(regex2.test(str[i])){
            if(val+num > 90){
                str1 += String.fromCharCode(val+num - 90 + 64);
            }
            else if(val + num < 65){
                str1 += String.fromCharCode(91 - (65 - val + num))
            }
            else{
                str1 += String.fromCharCode(val + num);
            }
        }
        else{
            str1 += str[i]
        }
    }
    return str1;
};

// Do not edit below this line
module.exports = caesar;
