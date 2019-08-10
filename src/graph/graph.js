import bfs from './bfs';
import dfs from './dfs';

function Graph() {
    if (!(this instanceof Graph)) {
        return new Graph();
    }
    this._graph = {};
}

Graph.prototype.addNode = function (node) {
    if(node){
        this._graph[node] = [];
    }
};

Graph.prototype.addPath = function (srcNode, destNode) {
  if(srcNode){
      if(this._graph.hasOwnProperty(srcNode)){
          this._graph[srcNode].push(destNode);
      }
  }
};

Graph.prototype.removeNode = function(node){
    if(this._graph.hasOwnProperty(node)){
        delete this._graph[node];
        Object.keys(this._graph).forEach(function (sNode) {
           this.removePath(sNode,node);
        }.bind(this));
    }
};

Graph.prototype.removePath = function(srcNode,destNode){
    if(this._graph.hasOwnProperty(srcNode)){
        this._graph[srcNode] = this._graph[srcNode].reduce(function (o,i) {
          if(i !== destNode){
              o.push(i);
          }
          return o;
        },[]);
    }
};

Graph.prototype.print = function () {
  Object.keys(this._graph).forEach(function (node) {
      this._graph[node].forEach(function (dest) {
          console.log(`${node} -> ${dest}`);
      });
  }.bind(this));
};

Graph.prototype.bfs = function (node) {
    bfs(this._graph,node);
};
Graph.prototype.dfs = function (node) {
    dfs(this._graph,node);
};

export default Graph;