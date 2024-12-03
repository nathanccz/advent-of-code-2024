const { readInput } = require('../utils/helpers');

const data = readInput('01')
const lines = data.split('\n')
let column1 = [],
    column2 = [],
    hash = {},
    sum = 0

lines.forEach(line => {
  const trimmedLine = line.trim(); 
  if (trimmedLine) { // Skip empty lines
    const [num1, num2] = trimmedLine.split(/\s+/); // Split by any whitespace
    if (num1 !== undefined && num2 !== undefined) {
      column1.push(parseFloat(num1)); 
      column2.push(parseFloat(num2)); 
    }
  }
});

for (let num of column1) {
  if (!hash[num]) { 
    hash[num] = column2.filter(n => n === num).length
  }
}

for (let num of column1) {
  sum += num * hash[num]
}

console.log(sum)