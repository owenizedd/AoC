import { binarySearchFirstOccurence } from "../helper.js";

const lines = `Time:        35937366
Distance:   212206012011044`.split('\n');
let ans = 1;

const times = lines[0].split(': ')[1].split(' ').filter(Number).map(Number);
const distances = lines[1].split(': ')[1].split(' ').filter(Number).map(Number);

const can = (j, times, distance) => j * (times - j) > distance;
for (const i in times) {
  const getFirstTrue = binarySearchFirstOccurence(1, times[i], (mid) => can(mid, times[i], distances[i]));
  const total = Math.abs(getFirstTrue * 2 - times[i] - 1);
  ans *= total;
}
console.log(ans);