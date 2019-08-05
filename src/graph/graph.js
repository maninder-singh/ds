
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

Graph.prototype.print = function () {
  Object.keys(this._graph).forEach(function (node) {
      this._graph[node].forEach(function (dest) {
          console.log(`${node} -> ${dest}`);
      });
  }.bind(this));
};

export default Graph;