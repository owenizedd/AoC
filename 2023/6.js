
const lines = `Time:        35937366
Distance:   212206012011044`.split('\n');
let ans = 1;

const times = lines[0].split(': ')[1].split(' ').filter(Number).map(Number);
const distances = lines[1].split(': ')[1].split(' ').filter(Number).map(Number);

for (let i = 0; i < times.length; i++) {
  let win = 0;
  for (let j = 1; j <= times[i]; j++) {
    if (j * (times[i] - j) > distances[i]) {
      win++;
    }
  }
  ans *= win;
}
console.log(ans)