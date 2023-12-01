import algorithms from 'algorithms';
export function findMaxElement(arr) {
  return Math.max(...arr);
}
export function findMinElement(arr) {
  return Math.min(...arr);
}
export function findAverage(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
export function getSum(arr) {
  return arr.reduce((a, b) => a + b);
}
export function getLast(arr) {
  return arr[arr.length - 1];
}
export function reverseArray(arr) {
  return [...arr].reverse();
}

export function sortAscending(arr) {
  return [...arr].sort();
}
export function sortDescending(arr) {
  return [...arr].sort().reverse();
}
export function binarySearch(arr, item) {
  return algorithms.Search.binarySearch(arr, item);
}
export function bfs(graph, root) {
  return algorithms.Search.bfs(graph, root);
}
export function getAlgorithm() {
  return algorithms;
}


//Read more: https://github.com/felipernb/algorithms.js/tree/master/src

/**
 * 
 * EXAMPLES OF USE BFS
 * 
  const ds = getDataStructures();
  const g = new ds.Graph(true);
  g.addVertex('A');
  g.addVertex('B');
  g.addVertex('C');
  g.addVertex('D');
  g.addVertex('E');
  g.addEdge('A', 'B', 1);
  g.addEdge('A', 'C', 3);
  g.addEdge('B', 'C', 1);
  g.addEdge('B', 'D', 0);
  g.addEdge('D', 'E', 1);
  g.addEdge('C', 'E', 1);

  const graph = getGraph();
  const search = getSearch();
  const ans = graph.breadthFirstSearch(g, 'A', {
    onTraversal: (vertex, neighbor) => {
      console.log(vertex, neighbor)
    }
    enterVertex: (vertex) => {}
    leaveVertex: (vertex) => {}
  })


  for DFS same params, for callbacks they have:
  callbacks.beforeTraversal = callbacks.beforeTraversal || noop; -> before traversal each vertex's neighbors
  callbacks.afterTraversal = callbacks.afterTraversal || noop; -> after traversal each vertex's neighbors
  callbacks.enterVertex = callbacks.enterVertex || noop; ->  invoked before the vertex's neighbors are traversed (once per vertex)
  callbacks.leaveVertex = callbacks.leaveVertex || noop; -> invoked after the vertex's neighbors are traversed (once per vertex)

  for dijkstra, it accept (graph, source) return shortest path to all vertices from source
 */