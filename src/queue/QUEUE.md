# queue 

An implementation of queue data structure using javascript.

### initialization 

```
  // Code example
      var Queue = DS.Queue;
      var queue = new Queue();
```

### methods 
* [enqueue](./queue.js) - insert element into queue.
```
queue.enqueue(1);
```

* [dequeue](./queue.js) - remove element from queue.
```
console.log(`front of queue => ${queue.dequeue()}`);
```

* [size](./queue.js) - size of queue.
```
console.log(`size of queue => ${queue.size()}`);
```

* [peek](./queue.js) - peek an element from queue.
```
console.log(`peek of queue => ${queue.peek()}`);
```

* [isEmpty](./queue.js) - is queue empty. 
```
console.log(`is queue empty => ${queue.isEmpty()}`);
```
