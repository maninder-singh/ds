/*
* Linked list reverse in group of size
* */

const reverseLinkedListByGroup = (head,size) => {
    let prev = null;
    let next = null;
    let count = 1;
    let aux = null;

    if(!size){
        size = 1; // if size is not mention set to 1
    }
    size = Number(size);
    if(size !== size){
        console.log("enter a valid number");
        return;
    }

    if(head === null || head.next === null){
        // either no node or single node
        return head;
    }
    while (head !== null && count <= size){
        if(!aux){
            aux = head;
        }
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
        count++;
    }
    if(head && aux){
        aux.next = reverseLinkedListByGroup(head,size);
    }
    return prev;
}