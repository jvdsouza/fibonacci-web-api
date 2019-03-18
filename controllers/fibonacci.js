const fibonacciCall = (req, resp) => {
    console.log(req.body);
    
    const {numInput} = req.body;
    // console.log(numInput);
    
    if (!numInput || isNaN(Number(numInput)) || typeof numInput === 'undefined' || numInput === null) {
        return resp.status(400).json('incorrect value submitted');
    }

    const fibonacciCalculate = (numInput) => {
        let cache = {};
        function fib(n){
            if(n in cache) {
                return cache[n]
            } else {
                if(n<2) {
                    return n
                }
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }
        return fib(Number(numInput))
    }
    
    resp.json(fibonacciCalculate(numInput))
    
}

module.exports = {
    fibonacciCall
}