/*
* Middle element of Linked list
*
* */

const middleElementOfLinkedList = function (head) {
    if(!head || head.next === null){
        return head;
    }
    let slow = head;
    let fast = head.next.next;

    while (fast !== null){
        slow = slow.next;

        if(fast.next === null){
            break;
        }
        fast = fast.next.next;
    }
    return slow;
}