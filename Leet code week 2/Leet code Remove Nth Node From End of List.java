/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
       if(head == null)
        return null;
 
        ListNode start = head;
        ListNode end = head;

        for(int i=0; i<n; i++){
            start = start.next;
        }
        if(start == null){
            head = head.next;
            return head;
        }
        while(start.next != null){
            start = start.next;
            end = end.next;
        }
        end.next = end.next.next;
        return head; 
    }
}
