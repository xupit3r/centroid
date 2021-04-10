const centroid = require('./lib/centroid.js');

const points = [
  [1, 1],
  [2, 2],
  [3, 3]
];

const center = centroid(points);

const isCorrect = center[0] === 2 && center[1] === 2;

console.log(
  `center is (${center[0]}, ${center[1]})`,
  `this is ${isCorrect ? 'correct' : 'incorrect'}.`
);
