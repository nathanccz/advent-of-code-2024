const { readInput } = require('../utils/helpers');

const data = readInput('02')
const reports = data.split('\n')

let safe = 0

reports.forEach(report => {
    const level = report.split(' ')
    const isAscending = level[1] - level[0] > 0
    
    for (let i = 1; i < level.length; i++) {
        const curr = level[i]
        const prev = level[i - 1]
        const diff = curr - prev

        if (diff > 0 !== isAscending || Math.abs(diff) === 0 ||  Math.abs(diff) > 3) {
            return
        }
    }

    safe++
})

console.log(safe)
