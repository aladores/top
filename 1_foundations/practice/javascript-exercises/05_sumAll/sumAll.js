const sumAll = function(start,end) {
  
    if ((start < 0 || end < 0) || (typeof start != 'number'|| typeof end !='number')){
        return ('ERROR');
    }
      // if the the first parameter is larger swap.
    if (start > end) {
        let tempS=start;
        let tempE=end;
        start = tempE;
        end = tempS;
    }
    
    let sum = start;
    for (i=start+1;i<end+1;i++){
        sum += i;
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
