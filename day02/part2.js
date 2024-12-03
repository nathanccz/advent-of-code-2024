const { readInput } = require('../utils/helpers');

const data = readInput('02')
const reports = data.split('\n')

let hash = {}

reports.forEach((r, i) => {
    hash[i] = checkIfSafe(r)
})

for (const key in hash) {
    if (hash[key] === 'unsafe') {
        for (let i = 0; i < reports[key].length; i++) {
            const array = reports[key].split(' ')
            array.splice(i, 1)
            if (checkIfSafe(array.join(' ')) === 'safe') {
                hash[key] = 'safe'
                break
            }
        }
    }
}

const result = Object.keys(hash).filter(key => hash[key] === 'safe').length

function checkIfSafe(report) {
    const level = report.split(' ') 
    const isAscending = level[1] - level[0] > 0

    for (let i = 1; i < level.length; i++) {
        const curr = level[i]
        const prev = level[i - 1]
        const diff = curr - prev

        if (diff > 0 !== isAscending || Math.abs(diff) === 0 || Math.abs(diff) > 3) {
            return 'unsafe'
        }
    }

    return 'safe'
}

console.log(result)