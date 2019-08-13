# linked-list 

An implementation of linked list data structure using javascript.

### initialization 

```
  // Code example
    var LinkedList = DS.LinkedList;
    var ll = new LinkedList();
```

### methods 
* [add](./ll.js) - add an element into linked list.
```
ll.add(1);
```

* [get](./ll.js) - get an element from linked list based on index location.
```
console.log(`element at index ${1} is ${ll.get(1)}`);
```

* [iterate](./ll.js) - loop over linked list.
```
ll.iterate(function (data) {
        console.log(`${data} => `);
  });
```

* [remove](./ll.js) - remove an node from linked list.
```
ll.remove(function(value){
    return value === 1; // remove node with value equal to 1
});
```

* [clear](./ll.js) - empty linked list. 
```
ll.clear();
```
