const fs = require('fs');
const path = require('path');

// Read input file for a given day
function readInput(day) {
  const filePath = path.resolve(__dirname, `../day${day.padStart(2, '0')}/input.txt`);
  return fs.readFileSync(filePath, 'utf-8').trim();
}

module.exports = { readInput };