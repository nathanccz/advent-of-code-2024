const { readInput } = require('../utils/helpers');

const data = readInput('03')
const funcs = []

let substring = ''

for (let c of data) {
    if ('mul()0123456789,'.includes(c)) {
        substring += c
    } else {
        substring = ''
    }
    if (substring[substring.length - 1] === ')' && substring.includes('mul')) {
        const indOfM = [...substring].findLastIndex(c => c === 'm')
        funcs.push(substring.substring(indOfM))
        substring = ''
    }
}

console.log(funcs)

let result = funcs.reduce((s, c) => {
    const nums = c.split(',').map(e => [...e].filter(c => !isNaN(c)).join(''))
    const product = mul(+nums[0], +nums[1])
    s += product || 0
    return s
}, 0)

function mul(n1, n2) {
    return n1 * n2
}

console.log(result)