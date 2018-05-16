/**
 * https://www.lintcode.com/problem/reverse-linked-list-ii/description
 * not fast
 * @author fjh
 * Created on 2018/5/12 下午8:05
 */

import java.util.Arrays;
import java.util.List;

/**
 * Definition for ListNode
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode(int x) {
 * val = x;
 * next = null;
 * }
 * }
 */
public class Solution {
    /**
     * @param head: ListNode head is the head of the linked list
     * @param m:    An integer
     * @param n:    An integer
     * @return: The head of the reversed ListNode
     */
    public ListNode reverseBetween(ListNode head, int m, int n) {
        int fm = m;
        if (m == n) {
            return head;
        }
        ListNode p = new ListNode(-1);
        p.next = head;
        for (;--m > 0; n--) {
            p = p.next;
        }


        ListNode endOfReverse = p.next;
        ListNode headOfReverse = endOfReverse;
        ListNode pReverse = endOfReverse.next;
        while (--n > 0) {
            ListNode nestP = pReverse;
            pReverse = pReverse.next;
            nestP.next = headOfReverse;
            headOfReverse = nestP;
        }
        p.next = headOfReverse;
        endOfReverse.next = pReverse;
        if (fm == 1) {
            return headOfReverse;
        }
        return head;
    }

    public static void main(String[] args) {
        String param = "3760->8560->4421->5069->3904->7595->2881->8879->8488->5040->5792->56->1007->2270->3403->6062->null";
        new Solution().reverseBetween(ListNode.build(param), 2, 7);
    }
}

class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
        next = null;
    }

    public static ListNode build(String path) {
        List<String> strs = Arrays.asList(path.split("->"));
        ListNode head = new ListNode(-1);
        ListNode p = new ListNode(-1);
        p.next = head;
        strs.forEach((item) ->{
            if ("null".equals(item)) {
                return;
            }
            ListNode p1 = p.next;
            p1.next = new ListNode(Integer.valueOf(item));
            p.next = p1.next;
        });
        return head.next;
    }
}
