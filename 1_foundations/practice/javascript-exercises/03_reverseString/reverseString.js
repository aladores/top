const reverseString = function(str) {
    let strArray = str.split('');
    let strReverse = strArray.reverse();
    //let strFinal = strReverse.toString();
    console.log(strReverse.join(""));
    return strReverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
