const fibonacci = function(terms) {
    let fib = [0,1];
    for (i=2;i<=terms;i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[terms]
};

// Do not edit below this line
module.exports = fibonacci;
