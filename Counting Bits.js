/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if(num === 0) return [0];
    if(num === 1) return [0, 1];
    var result = new Array(num + 1);
    result[0] = 0;
    result[1] = 1;
    var e = 1;
    var p = 2;
    var count = 2;
    
    while(p <= num) {
        while(count-- > 0 && p <= num) {
            result[p] = result[e-count] + 1;
             p = p + 1;
        }
        count = p;
        e = p - 1;
    }
    
    return result;
};
