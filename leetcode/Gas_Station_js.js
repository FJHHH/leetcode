//https://leetcode.com/problems/gas-station/
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    return n_2(gas, cost);
};

var n_2 = function(gas, cost) {
    var leng = gas.length;
    var s = 0;
    var ss = 0;
    var sstemp = gas[0] - cost[0];
    var i;
    for (i = 1; i < leng; i++) {
        var la = gas[i] - cost[i]
        if(sstemp < 0) {
            ss += sstemp;
            s = i;
            sstemp = la;
        } else {
            sstemp += la;
        }
    }
    if(sstemp + ss >= 0) {
        return s;
    } else {
        return -1;
    }
}
/**
 * 
 */
var n = function(gas, cost) {
    var leng = gas.length;
    var la = [];
    var i = 0;
    for (i = 0; i < leng; i++) {
        la[i] = gas[i] - cost[i];
    }
    var max = la[0];
    var maxs = 0;
    var maxtemp = la[0];
    var maxtemps = 0;
    var min = la[0];
    var mins = 0;
    var mine = 1;
    var mintemp = la[0];
    var mintemps = 0;
    var total = la[0];
    for (i = 1; i < leng; i++) {
        total += la[i];
        if(la[i] > 0) {
            if(mintemp < min) {
                min = mintemp;
                mins = mintemps;
                mine = i;
                mintemp = la[i];
                mintemps = i;
            } 
            if(maxtemp < 0) {
                maxtemp = la[i];
                maxtemps = i;
            } else {
                maxtemp += la[i];
            }
        } else {
            if(maxtemp > max) {
                max = maxtemp;
                maxs = maxtemps;
                maxtemp = la[i];
                maxtemps = i;
            }
            if(mintemp > 0) {
                mintemp = la[i];
                mintemps = i;
            } else {
                mintemp += la[i];
            }
        }
    }
    if(maxtemp > max) {
        max = maxtemp;
        maxs = maxtemps;
    }
    if(mintemp < min) {
        min = mintemp;
        mins = mintemps;
        mine = 0;
    } 
    if(total < 0) {
        return -1;
    }
    if (max >= (total - min)) {
        return maxs;
    } else {
        return mine;
    }
}
var n2 = function(gas, cost) {
    var gast = 0;
    var i = 0;
    var j = 0;
    var max = 0;
    var maxtemp = gas[0] - cost[0];
    var tt;
    var step = 0;
    var leng = gas.length;
    for(i = 1; i < leng; i++) {
        tt = gas[i] - cost[i];
        if(tt > maxtemp) {
            max = i;
            maxtemp = tt;
        }
    }
    for(i = max, step = 0; step < leng; i = (i + 1) % leng, step++) {
        gast = gas[i] - cost[i];
        if (gast < 0) {
            continue;
        }
        for (j = (i + 1) % leng; true; ) {
            gast += gas[j] - cost[j];
            if (gast < 0) {
                break;
            }
            j = (j + 1) % leng;
            if(j === i) {
                return i;
            }
        }
     }
    return -1;
};
