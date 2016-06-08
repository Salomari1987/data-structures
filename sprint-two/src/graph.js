

// Instantiate a new graph
var Graph = function() {
	this.nodes = {}
	this.edges = []
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.nodes[node] = []
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if(this.nodes[node] !== undefined){
		return true
	}
	return false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	for(var i = 0; i < this.nodes[node].length; i++){
		this.removeEdge(undefined,undefined,this.nodes[node][i])
	}
	delete this.nodes[node]
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	for(var i = 0; i < this.nodes[fromNode].length; i++){
		if(this.edges[this.nodes[fromNode][i]] !== undefined && 
			(this.edges[this.nodes[fromNode][i]][0] === toNode || this.edges[this.nodes[fromNode][i]][1] === toNode)){
			return true
		}
	}
	return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.edges.push([fromNode, toNode]) 
	this.nodes[fromNode].push(this.edges.length- 1)
	this.nodes[toNode].push(this.edges.length - 1)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode, ...args) {
	if(fromNode === undefined && args.length > 0){
		var edge = args[0]
		if(this.nodes[this.edges[edge][0]].length > this.nodes[this.edges[edge][1]].length){
			var l = this.nodes[this.edges[edge][0]].length
		} else {
			var l = this.nodes[this.edges[edge][1]].length
		}
		for(var i = 0; i < l; i++){
			if(this.nodes[this.edges[edge][0]][i] === edge){
				this.nodes[this.edges[edge][0]][i] = undefined
			}
			if(this.nodes[this.edges[edge][1]][i] === edge){
				this.nodes[this.edges[edge][1]][i] = undefined
			}
		}
		this.edges[edge] = undefined	
	}
	for(var i = 0; i < this.nodes[fromNode].length; i++){
		if(this.edges[this.nodes[fromNode][i]][0] === toNode || this.edges[this.nodes[fromNode][i]][1] === toNode){
			this.edges[this.nodes[fromNode][i]] = undefined
			for(var j = 0; j < this.nodes[toNode].length; j++){
				if(this.nodes[toNode][j] === this.nodes[fromNode][i]){
					this.nodes[toNode][j] = undefined
				}
			}
			this.nodes[fromNode][i] = undefined
		}
	}	
	
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	_.each(this.nodes, (value, key) => {cb(key)})
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


