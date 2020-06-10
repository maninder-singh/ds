/*
* Linked list reverse
* */

const reverseLinkedList = (head) => {
    let prev = null;
    let next = null;

    if(head === null || head.next === null){
        // either no node or single node
        return head;
    }
    while (head !== null){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}