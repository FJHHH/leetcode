//https://leetcode.com/problems/maximal-square/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    return method2(matrix);
};
//76%
var method2 = function(matrix) {
    var max = 0;
    var m = matrix.length;
    if(m === 0) {
        return 0;
    }
    var n = matrix[0].length;
    var dp = [];
    var i = 0, j = 0;
    dp[0] = [];
    for(i = 0; i < n; i++) {
        dp[0][i] = Number(matrix[0][i]);
        if(dp[0][i] === 1) {
            max = 1;
        }
    }
    for(i = 1; i < m; i++) {
        dp[i] = [];
        dp[i][0] = Number(matrix[i][0]);
        if(dp[i][0] === 1) {
            max = 1;
        }
    }
    for(i = 1; i < m; i++) {
        for(j = 1; j < n; j++) {
            dp[i][j] = matrix[i][j] === '0'?0:Math.min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1]) + 1;
            if(dp[i][j] > max) {
                max = dp[i][j];
            }
        }
    }
    
    return max*max;
}
//7%
var method1 = function(matrix) {
    var temp = [];
    var m = matrix.length;
    if(m === 0) {
        return 0;
    }
    var flag2 = true;
    var n = matrix[0].length;
    var i = 0, j = 0;
    for(;i < m; i++) {
        temp[i] = [];
        for(j = 0; j < n; j++) {
            temp[i][j] = matrix[i][j];
            if(temp[i][j] === '1') {
                flag2 = false;
            }
        }
    }
    if(flag2) {
        return 0;
    }
    var temp2 = [];
    var flag = false;
    for(i = 0; i < m - 1; i++) {
        temp2[i] = [];
        for(j = 0; j < n - 1; j++) {
            temp2[i][j] = check(matrix, i, j);
            if(temp2[i][j] === '1') {
                flag = true;
            }
        }
    }
    if(flag) {
        var re = maximalSquare(temp2);
        var num = Math.sqrt(re) + 1;
        return num*num;
    } else {
        return 1;
    }
}

var check = function(matrix, i,  j) {
    var temp = matrix[i][j];
    var temp2 = matrix[i + 1][j];
    var temp3 = matrix[i][j + 1];
    var temp4 = matrix[i + 1][j + 1];
    if(temp !== '1' || temp2 !== '1' || temp3 !== '1' || temp4 !== '1') {
        return '0';
    }
    return '1';
};
