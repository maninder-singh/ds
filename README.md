# ds

Implementation of basic data structure in javascript.

### Setup Guide
```
$ git clone git@github.com:maninder-singh/ds.git
$ cd ds
$ npm install
```
### Run Instruction 
```
$ cd ds
$ npm install
$ npm run serve

```

### Build Instruction 
```
$ cd ds
$ npm install
$ npm run build

// ds.min.js file is created in dist folder
```

### Data structure implementation 
* LinkedList
  * [Linked List](src/linkedlist/ll.js) - Basic implementation of linked list.
  ```
    // Code example
    var LinkedList = DS.LinkedList;
    var ll = new LinkedList();
    ll.add(1);
    ll.add(2);
    ll.add(4);
    ll.add(3);
    ll.add(5);
    
    console.log(`element at index ${1} is ${ll.get(1)}`);
    
    console.log("before remove ");
    ll.iterate(function (data) {
        console.log(`${data} => `);
    });
    ll.remove(1);
    console.log("after remove ");
    ll.iterate(function (data) {
        console.log(`${data} => `);
    });
    
    ll.clear();
    console.log("after clear");
    ll.iterate(function (data) {
        console.log(`${data} => `);
    });
  ```
    
* Stack
  * [Stack](src/stack/stack.js) - Basic implementation of stack.
  ```
  // Code example
  var Stack = DS.Stack;
  var stack = new Stack();
  stack.push(1);
  stack.push(2);
  console.log(`top of stack => ${stack.pop()}`);
  stack.push(3);
  stack.push(4);
  console.log(`size of stack => ${stack.size()}`);
  console.log(`peek of stack => ${stack.peek()}`);
  console.log(`is stack empty => ${stack.isEmpty()}`);
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  console.log(`top of stack => ${stack.pop()}`);
  console.log(`size of stack => ${stack.size()}`);
  console.log(`peek of stack => ${stack.peek()}`);
  console.log(`is stack empty => ${stack.isEmpty()}`);
  ```
* Queue
  * [Queue](src/queue/queue.js) - Basic implementation of queue.
  ```
    // Code example
    var Queue = DS.Queue;
    var queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    console.log(`size of queue => ${queue.size()}`);
    console.log(`is queue empty => ${queue.isEmpty()}`);
    console.log(`peek of queue => ${queue.peek()}`);
    
    console.log(`front of queue => ${queue.dequeue()}`);
    console.log(`front of queue => ${queue.dequeue()}`);
    console.log(`front of queue => ${queue.dequeue()}`);
    console.log(`size of queue => ${queue.size()}`);
    console.log(`is queue empty => ${queue.isEmpty()}`);
    console.log(`peek of queue => ${queue.peek()}`);
    console.log(`front of queue => ${queue.dequeue()}`);
    console.log(`front of queue => ${queue.dequeue()}`);
    console.log(`size of queue => ${queue.size()}`);
    console.log(`is queue empty => ${queue.isEmpty()}`);
    console.log(`peek of queue => ${queue.peek()}`);
  ```  
  