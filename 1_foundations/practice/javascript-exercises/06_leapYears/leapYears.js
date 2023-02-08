const leapYears = function(year) {
    
    let regularFlag = false;
    let centuryFlag = false;
    let centuryLeapFlag = false;
    //check if its a regular leap year
    if ((year%4) ==0){
        regularFlag = true;
    }
    //check if its a century year
    if ((year%100) == 0) {
        centuryFlag = true;
    }
    //check if its a century leap year
    if ((year%400) == 0){
        centuryLeapFlag = true;
    }
    //regular leap year 
    if (regularFlag==true && centuryFlag == false){
        return true;
    }
    //century leap year 
    if (regularFlag==true && centuryLeapFlag == true && centuryFlag == true){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
