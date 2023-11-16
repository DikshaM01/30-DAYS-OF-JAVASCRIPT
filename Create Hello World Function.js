var createHelloWorld = function() { //the variable is created which will store the function
    
    return function(...args) { //this function will take unspecified number of arguments 
        return "Hello World"; //this will return simply Hello world
    }
};
