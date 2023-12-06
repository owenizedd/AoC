import algorithms from 'algorithms';

export const findMaxElement = (arr) => Math.max(...arr);

export const findMinElement = (arr) => Math.min(...arr);

export const findAverage = (arr) => arr.reduce((a, b) => a + b) / arr.length;

export const getSum = (arr) => arr.reduce((a, b) => a + b);

export const getProduct = (arr) => arr.reduce((a, b) => a * b);

export const getLast = (arr) => arr[arr.length - 1];

export const reverseArray = (arr) => [...arr].reverse();

export const sortAscending = (arr) => [...arr].sort();

export const sortDescending = (arr) => [...arr].sort().reverse();

export const binarySearch = (arr, item) => algorithms.Search.binarySearch(arr, item);
export const binarySearchFirstOccurence = (left, right, middleCallback) => {
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (middleCallback(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
export const binarySearchLastOccurence = (left, right, middleCallback) => {
  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2);
    if (middleCallback(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;

}
export const bfs = (graph, root) => algorithms.Search.bfs(graph, root);

export const getAlgorithm = () => algorithms;

export const generateArray = (length, value = 0) => Array(length).fill(value);

export const generate2DArray = (rows, columns, value = 0) => Array(rows).fill(Array(columns).fill(value));

export function fill2DArrayBorder(original2DArr, value = ' ') {
  const arr = structuredClone(original2DArr);
  const rows = arr.length;
  const columns = arr[0].length;
  for (let i = 0; i < rows; i++) {
    arr[i][0] = value;
    arr[i][columns - 1] = value;
  }
  for (let i = 0; i < columns; i++) {
    arr[0][i] = value;
    arr[rows - 1][i] = value;
  }
  return arr;
}
export const isNumber = (n) => !isNaN(parseFloat(n)) && isFinite(n);

export const getAsciiCode = (char) => char.charCodeAt(0);

export function isLetter(n) {
  return getAsciiCode(n) >= 65 && getAsciiCode(n) <= 90 || getAsciiCode(n) >= 97 && getAsciiCode(n) <= 122;
}
export const forEachNumber = (arr, callback) => arr.filter(isNumber).map(callback);

export const forEachLetter = (arr, callback) => arr.filter(isLetter).map(callback);

export const findFirstFromSorted = (arr, target) => {
  const firstIndex = getAlgorithm().Search.binarySearch(arr, target);
  return firstIndex;
}
export const findLastFromSorted = (arr, target) => {
  const firstIndex = getAlgorithm().Search.binarySearch(reverseArray(arr), target, true);
  return arr.length - firstIndex - 1;
}
export const dirsIncludeDiagonal = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1], [0, 1],
  [1, -1], [1, 0], [1, 1],
];
export const dirsWithoutDiagonal = [
  [-1, 0], [1, 0], [0, -1], [0, 1],
]
export const loopThroughDirections = (includeDiagonal, callback) => {

  const dirs = includeDiagonal ? dirsIncludeDiagonal : dirsWithoutDiagonal;
  for (const [dx, dy] of dirs) {
    callback(dx, dy);
  }
}

/**
 * 
 * @param {array} arr 
 * @param {string} target 
 * @returns {array} result every index of target in arr
 */
export const findAllMatches = (arr, target) => [...arr.matchAll(new RegExp(target, 'g'))]


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