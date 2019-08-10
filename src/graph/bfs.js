
const bfsUtil = function (graph,visitedNodes,queue) {
    for(let index = 0; index < queue.length ; index++){
        graph[queue[index]].forEach(function (node) {
            if(!visitedNodes.hasOwnProperty(node)){
                visitedNodes[node] = true;
                queue.push(node);
            }
        });
    }
    console.log("BFS of graph ");
    console.log(queue.join(' - '));
};

export default function(graph,node) {
    if(graph){
        let visitedNodes = {};
        if(graph.hasOwnProperty(node)){
           visitedNodes[node] = true;
            bfsUtil(graph,visitedNodes,[node]);
        }
    }
};