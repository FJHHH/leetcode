//https://leetcode.com/problems/counting-bits/
/**
 * @param {number} num
 * @return {number[]}
 */
/**
 * 看了全部Hint才想出来的。。
 * 二进制每进一位，在进下一位之前，如果把进的这一位去掉，这一段的数字和进这一位之前是完全相同的。
 * 因此这一段就只需要将进的这一位的1加到进位之前得到的对应的数字上，就是这一段的结果了。
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
