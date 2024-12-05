const { readInput } = require('../utils/helpers');

const data = readInput('03')
const funcs = []

let funcString = '',
    isActive = true

for (let i = 0; i < data.length; i++) {
    const c = data[i]

    if (c === "d" && data.substring(i, i + 5) === "don't") {
        isActive = false
    } else if (c === "d" && data.substring(i, i + 4) === 'do()') {
        isActive = true
    }

    if ('mul()0123456789,'.includes(c)) {
        funcString += c
    } else {
        funcString = ''
    }
    
    if (funcString[funcString.length - 1] === ')' && funcString.includes('mul')) {
        if (isActive) {
            const indOfM = [...funcString].findLastIndex(c => c === 'm')
            funcs.push(funcString.substring(indOfM))
        }
        funcString = ''
    }
}

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