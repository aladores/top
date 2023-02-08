const removeFromArray = function(arr, ...toRemove) {
    let removeArr = [...toRemove];
    let firstArr = arr;
    let resultArr = [];
    //resultArr = arr.filter(i => !removeArr.includes(i));
   
    //includes 2
    //  -then get the index of that 
  
    for (i=0; i<arr.length; i++){
        //includes 3
        if (firstArr.includes(toRemove[i])){
            //remove 1 character from the third position
            //instead remove 1 character from the position that contains the wrong number
             firstArr.splice(firstArr.indexOf(toRemove[i]),1);
        }
    }
    console.log(firstArr);
    return firstArr;
};

// Do not edit below this line
module.exports = removeFromArray;
