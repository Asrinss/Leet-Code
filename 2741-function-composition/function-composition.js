/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        if (functions.length === 0) {
            return x;
        }  
        let result = x;

        for (let x = functions.length - 1; x >= 0; x--) {
            result = functions[x](result);
        }

        return result;
    }
};





/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */