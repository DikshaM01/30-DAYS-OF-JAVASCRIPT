var createCounter = function(init) {
    let count=init;
    return{
        increment()
        {
            return ++init;
        },
        decrement()
        {
            return --init;
        },
        reset()
        {
            init=count;
            return init;
        }
        

    }
};