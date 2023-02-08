const caesar = function(word,shift) {
    let shiftResult = [];
    let stringResult = "";
    
    for (i=0; i<word.length; i++){
        if (/[a-zA-Z]+/g.test(word[i])){
            shiftResult.push(word[i].charCodeAt());
            //If letter is one of the last 5 of 26
            if (/[u-zU-Z]+/g.test(word[i])){
                shiftResult[i] -= 21;
                console.log(shiftResult[i]);
                console.log(shiftResult[i].charCodeAt());
            } 
            else{
                shiftResult[i] += shift;
            }
            stringResult += String.fromCharCode(shiftResult[i]);
        }  
        else {
            stringResult += word[i];
        }
    }
    console.log(shiftResult);
    console.log(stringResult);
    return stringResult;
};

// Do not edit below this line
module.exports = caesar;
