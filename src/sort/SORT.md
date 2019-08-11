# sorting 

An implementation of sorting algorithms using javascript.

### methods 
* [bubbleSort](./bubble-sort.js) - bubble sort algorithm implementation.
```
let comparator = function(i,j){
    if(i > j){
        return 1; // i is greater than j
    } else if(i === j){
        return 0; // i equal to j
    }else{
        return -1; // i is less than j
    }
};
console.log(`bubble sort => ${DS.bubbleSort([64, 34, 25, 12, 22, 11, 90],comparator)}`); 
```

* [selectionSort](./selection-sort.js) - selection sort algorithm implementation.
```
let comparator = function(i,j){
    if(i > j){
        return 1; // i is greater than j
    } else if(i === j){
        return 0; // i equal to j
    }else{
        return -1; // i is less than j
    }
};
console.log(`selection sort => ${DS.selectionSort([64, 34, 25, 12, 22, 11, 90],comparator)}`); 
```

* [insertionSort](./insertion-sort.js) - insertion sort algorithm implementation.
```
let comparator = function(i,j){
    if(i > j){
        return 1; // i is greater than j
    } else if(i === j){
        return 0; // i equal to j
    }else{
        return -1; // i is less than j
    }
};
console.log(`insertion sort => ${DS.insertionSort([64, 34, 25, 12, 22, 11, 90],comparator)}`); 
```

* [quickSort](./quick-sort.js) - quick sort algorithm implementation.
```
let comparator = function(i,j){
    if(i > j){
        return 1; // i is greater than j
    } else if(i === j){
        return 0; // i equal to j
    }else{
        return -1; // i is less than j
    }
};
console.log(`quick sort => ${DS.quickSort([64, 34, 25, 12, 22, 11, 90],comparator)}`); 
```
