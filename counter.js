var createCounter = function(n) { //anonymous function

    return function() {
        return n++;
    };
};