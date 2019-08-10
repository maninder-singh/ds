# graph 

An implementation of graph data structure using javascript.

### initialization 

```
var Graph = DS.Graph;
var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');
graph.addPath('A','B');
graph.addPath('A','C');
graph.addPath('A','D');
graph.addPath('A','E');
graph.addPath('B','D');
graph.addPath('B','C');
graph.addPath('C','E');
graph.addPath('C','C');
graph.addPath('C','B');
graph.addPath('D','A');
graph.addPath('D','B');
graph.addPath('E','E');

```

### implementation 
* [Graph](./graph.js) 
```
// Code example
graph.print();
```

* [Breadth-first search](./bfs.js)
```
graph.bfs('A');
```

* [Depth-first search](./dfs.js)
```
graph.dfs('1');
```

