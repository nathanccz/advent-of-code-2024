const { readInput } = require('../utils/helpers');

const data = readInput('01')
const lines = data.split('\n')
let column1 = [],
    column2 = [],
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

column1 = column1.sort((a, b) => a - b)
column2 = column2.sort((a, b) => a - b)

for (let i = 0; i < column1.length; i++) {
  sum += Math.abs(column1[i] - column2[i])
}


console.log(sum)