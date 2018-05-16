//https://leetcode.com/problems/merge-k-sorted-lists/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return lists;
    return mergeLists(lists, 0, lists.length - 1);
};

var mergeLists = function(lists, s, e) {
    if(s === e) {
        return lists[s];
    }
    if(s - e === 1) {
        return merge2Lists(lists[s], lists[e]);
    }
    var f = Math.floor((s + e) / 2);
    return merge2Lists(mergeLists(lists, s, f), mergeLists(lists, f + 1, e));
};

var merge2Lists = function(list1, list2) {
    var temp1 = list1;
    var temp2 = list2;
    var newHead = null;
    var temp = null;
    var max;
    while(temp1 && temp2) {
        if(temp1.val < temp2.val) {
            max = temp1;
            temp1 = temp1.next;
        } else {
            max = temp2;
            temp2 = temp2.next;
        }
        if(newHead === null) {
            newHead = max;
            newHead.next = null;
            temp = newHead;
        } else {
            temp.next = max;
            temp = temp.next;
            temp.next = null;
        }
    }
    
    if(newHead === null) {
        newHead = temp1?temp1:temp2;
    } else {
        temp.next = temp1?temp1:temp2;
    }
    return newHead;
};
