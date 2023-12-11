
import { sqrt } from "mathjs";
import { generateArray, getAlgorithm, p, print2DArray } from "../helper.js";
import { round } from "mathjs";
import { abs } from "mathjs";
let lines = `........#.........................................................................................................#..................#......
.............#.......................#....................................#......#......................#.......................#...........
...............................#...........#...........................................................................#....................
.........................#...........................#.......................................#...........................................#..
.....#...............................................................................#......................................................
....................................................................................................................................#.......
...........................................................#..............................#................#.......#........................
..........#..........#............#..................................#......#...............................................................
.........................................#..................................................................................................
#..............#.............#.......................#........................................#.......................#.....................
......#..........................................................................#......#...........#.......................................
................................................................................................................#...........................
............#...........#...............................#..............#...................................#................................
....................................#................................................#.....................................#................
...#.............#..............................................#...........................................................................
.......................................................................................................#....................................
.........#.....................#...............................................................#............................................
.........................................................................................................................................#..
#...............................................................................#.....................................#.....................
......#...........#.................#..........#.........................................#..................................................
...........#............#..............................#..............#..........................................#..........................
...................................................................................#..............#...........................#.............
..................................................#.........................................................................................
.............................................#............................................................................#.............#...
.........................................................................................................#..................................
.....#........................#...........................#.....#..............#............#...............................................
................#................................................................................................................#..........
................................................#.............................................................#.............................
..........................#..........#.......................#.....................#.....#...........#......................................
............#......#........................#.....................#.....#.....................#........................#...................#
............................................................................................................................................
................................#.......................#...................................................................#...............
.....#...................................#...................................................................#........................#.....
....................................#.......................#...............................................................................
.............................................#................................#................#................................#...........
#.....................#.................................................#............................#......................................
.....................................................#............................................................#.......#.........#.......
..................#............................................#...........................................................................#
...............................#.......#..................................................................#.................................
............#..............................................................#.................................................#..............
...................................#........................................................#...............................................
#....................#......................................................................................................................
......#....................................................#.......................................#........................................
...................................................................#...........#...............................................#.....#......
.............................#..................#................................................................#..........................
...................#...............................................................#......................................#.................
............................................................................................................................................
............................................#....................#.................................................................#........
........#......#...............#.......#...........#.........................................#..............................................
........................................................................................#.........#........#................................
............................................................................................................................................
..#..............................................................................#..........................................................
..................................#.......................#.............................................#........#.....................#....
.............#...............#..............#.....................................................................................#.........
............................................................................................................................................
.....................................#.............................#....................#...................................................
..........#.................................................................................................................................
.....#...........................#.......#...............................#..........#........#...............#.....#......#.................
................................................#..................................................#........................................
#.......................................................................................................................................#...
............................................................................................................................................
.....................#................................#........................................#...........#................................
...........#..............#..........................................#......................................................................
....................................#...........................#...............#....................#................#............#......#.
......#..............................................................................#......................................#...............
..............#.................#..............#..........................................#.................................................
...........................................................#.............#..................................................................
.#......................................................................................................................................#...
...............................................................................#.........................#.....#..................#.........
.................................................................#...............................#...................#......................
.......#.........#.....#..................#..........#...............................#......................................................
...........................................................................................................................#................
.............................#........#......................#..............................................#............................#..
........................................................#..........................................#...............#........................
...............................................................................#...................................................#........
............#...................#.......................................................................#...................................
......#....................#................#.........................#.................#.....#.............................................
...................................................#........................................................................................
.....................#...............#.....................................#.............................................#.................#
.........#.........................................................#.................................#......................................
............................................................................................................................................
............................................................................................................................................
.....#...........................................#..........#.....................................#.......#.................................
........................#......#............................................................................................................
..............................................................................#..............#........#.....................................
#.................#.........................#......................................................................#........................
.............#.........................#..................#........................#......................................#.................
........................................................................#...................................................................
....#...................................................................................................#.................................#.
.....................#.............................................#............#.......#.......................................#...........
...............................................#............#..................................#............................................
..............#................#...........................................#............................................#...................
.#.....#....................................................................................................................................
...........................#........#..................#.........#..................................................................#.......
...............................................................................................................................#............
....................#......................#.......................................#...........................#............................
..........#........................................#..........#...............#...................#.........................................
..................................#......................................................................#.................#................
.......................#......................................................................#......................#......................
..................#............................#.................#......#...................................................................
.................................................................................#.............................................#............
............#.................#......#..............................................................................................#.....#.
#.....................................................#....................#.........#..........................#...........................
.....#.....................................#................#...............................................................................
..................................#.........................................................................................#..........#....
................#.......................................................................#......#............................................
........................................#...................................................................................................
.........#.............#.......................#.......................................................#............................#.......
..............................................................................#.............................................................
#.............................#....................................................#........................................................
......................................#.....................#.....................................................#..............#..........
..................................................................#.......................#................#...............................#
...................#..............#...................#..............................................#..................#...................
................................................................................................#...........................................
.......#.....#..............................................................................................................................
..................................................#.................................................................................#.......
......................#..................#........................................#....................#......#...........................#.
.......................................................#.................#................#................................#................
...........................#.......................................#................................................#.......................
.................................................................................................................................#..........
......#..........................................#.............................#......................................................#.....
...................#....................#............................................#..........#...........................................
...........#.........................................#...........#..........................................#...............................
..#..............................#.........................................#...........................................#....................
......................................................................#.................#...................................................
.......................#...................................................................................................#................
...........................................................#......................#..................#........#.............................
.....#................................#.....#.......................................................................#..............#........
#...............................#........................................#.......................#..........................................
........................................................................................................................#...................
.........................................#..................................................................................................
............#.....................................#..................#......#................#........................................#.....
........................................................#......#.......................................#....................................
........#.........#..................#..................................................#.......................#...........................
................................................................................#........................................#.........#........
............................................................................................................#.................#.............
........................................#......#............................................................................................
....................#..............................................................#............#......................................#....
.........#.....................#.........................................#.............................#.......#............................
...#......................#............................#........#......................#...............................#..........#.........`.split('\n');

const isHorizontalAllDots = (line) => {
  for (const idx in line) {
    if (line[idx] === '#') return false;
  }
  return true;
}
const isVerticalAllDots = (idx) => {
  for(let i =0; i < lines.length; i++) {
    if (lines[i][idx] === '#') return false;
  }
  return true;
}


let start = []
const parse = () => {
  for(let idx = 0; idx < lines.length; idx++){
    const line = lines[idx];
    if (isHorizontalAllDots(line)){
      lines.splice(idx, 0, lines[idx]);
      idx++;
    }
  }
  for(let idx = 0; idx < lines[0].length; idx++){
    if (isVerticalAllDots(idx)){
      for(let i = 0; i < lines.length; i++){
        const newLine = lines[i].split('');
        newLine.splice(idx, 0, '.');
        lines[i] = newLine.join(''); 
      
      }
      idx++;
    }
  }
  print2DArray(lines, false, ' ')

  for(let i = 0; i < lines.length; i++){
    for(let j = 0; j < lines[0].length; j++){
      if (lines[i][j] === '#'){
        start.push([i, j])
      }
    }
  }
  p(start)
}
parse();

const solve = (nodes) => {
  const getDistance = (x1, y1, x2, y2) => {
    return abs(x1 - x2) + abs(y1 - y2);
  }
  const seen = {};
  let sum =0;
  p(getDistance(...start[4], ...start[8]))
  for(let i = 0; i < start.length; i++){
    const [x1, y1] = start[i];

    for(let j = 0; j < start.length; j++){
      const [x2, y2] = start[j];
      if (!seen[`${x1},${y1}-${x2},${y2}`] && i !== j){

        const distance = getDistance(x1, y1, x2, y2);
        sum += distance;
        seen[`${x1},${y1}-${x2},${y2}`] = true;
        seen[`${x2},${y2}-${x1},${y1}`] = true;

      }

    }

    
  }
  p('ans', sum)
}


solve();