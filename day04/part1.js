const { readInput } = require('../utils/helpers');

const data = readInput('04')
const matrix = data.split('\n').map(line => line.split('').filter(c => c !== '\r'))

const COMBO_SIZE = 4;

// All 8 directions: [dx, dy]
const directions = [
  [0, 1],   // right
  [1, 0],   // down
  [1, 1],   // diagonal down-right
  [1, -1],  // diagonal down-left
  [0, -1],  // left
  [-1, 0],  // top
  [-1, -1], // diagonal up-left
  [-1, 1],  // diagonal up-right
];

let sum = 0;

// Iterate through all matrix cells
matrix.forEach((row, i) => {
  row.forEach((_, j) => {
    directions.forEach(([dx, dy]) => {
      // Build the "word" by traversing the direction
      const word = Array.from({ length: COMBO_SIZE }, (_, k) => matrix[i + k * dx]?.[j + k * dy] || null)
                        .join('');
      if (word === 'XMAS') sum++;
    });
  });
});

console.log(sum);


   