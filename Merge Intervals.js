//https://leetcode.com/problems/merge-intervals/
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * 这题的run code有些问题啊Expected answer总是输出[undefined,undefined]的数组，只好直接Submit Solution来测试。。
 * 总之先按start排序，然后从头开始遍历，分三种情况，做相应处理就好了，不太理解难度为什么是Hard
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(!intervals || intervals.length === 0) {
        return intervals;
    }
    intervals.sort(compare);
    
    var now = new Interval(intervals[0].start, intervals[0].end);
    var result = [now];
    for(var i = 1; i < intervals.length; i++) {
        var temp = intervals[i];
        if(temp.end > now.end && temp.start <= now.end) {
            now.end = temp.end;
        } else if(temp.start > now.end) {
            now = new Interval(temp.start, temp.end);
            result[result.length] = now;
        }
    }
    return result;
};

function compare(s, e) {
    if(s.start < e.start) {
        return -1;
    } else if(s.start > e.start) {
        return 1;
    } else {
        return 0;
    }
}
