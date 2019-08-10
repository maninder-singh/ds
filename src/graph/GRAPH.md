# graph 

An implementation of graph data structure using javascript.

### initialization 

```
    // Code example
        var Graph = DS.Graph;
        var graph = new Graph();
```

### methods 
* [addNode](./graph.js) - add a node into graph
```
graph.addNode('A');
```

* [addPath](./graph.js) - create a path from src node to destination node in graph. 
```
graph.addPath('A','B');
```


* [print](./graph.js) - print graph
```
graph.print();
```

* [bfs](./bfs.js) - breath first search implementation in graph.
```
graph.bfs('A');
```

* [dfs](./dfs.js) - depth first search implementation in graph
```
graph.dfs('1');
```