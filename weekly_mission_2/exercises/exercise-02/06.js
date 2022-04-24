import explorers from './explorers.js'

// todo: Obtén la suma de todos los exercises_completed, usa REDUCE
let total = 0
const addition = explorers.forEach( ({ exercises_completed }) => total += exercises_completed )
console.log(total)