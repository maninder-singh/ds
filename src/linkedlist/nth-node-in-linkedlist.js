/*
* Nth node in linked list
* */

const nthNodeInLinkedList = (head,number) => {
    if(number === null || number === undefined) {
        console.log("number is not provided");
        return null;
    }
    number = Number(number);
    if(number !== number){
        console.log("pass a valid number");
        return null;
    }

    if(number <= 0){
        console.log("number should be greater than 0");
        return null;
    }

    if(!head){
        console.log("empty linked list provided ");
        return null;
    }
    let count = 1;
    while (head !== null){
        if(count === number){
            return head;
        }
        head = head.next;
        count++;
    }
    console.log("no element found");
    return null;
};