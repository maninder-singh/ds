let dfsUtil;
dfsUtil = function(graph,node,visitedNodes,result){
    if(graph.hasOwnProperty(node)){
        graph[node].forEach(function (_node) {
           if(!visitedNodes.hasOwnProperty(_node)){
               visitedNodes[_node] = true;
               result.push(_node);
               dfsUtil(graph,_node,visitedNodes,result);
           }
        });
    }
};

export default function (graph,node) {
    if(graph){
        let visitedNodes = {},
            output = [];
        visitedNodes[node] = true;
        output.push(node);
        dfsUtil(graph,node ,visitedNodes,output);
        console.log("DFS of graph ");
        console.log(output.join(' - '));
    }
};