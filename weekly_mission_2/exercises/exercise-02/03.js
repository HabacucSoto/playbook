import explorers from './explorers.js'

// todo: Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
let arrStacks = []
const stacks2arr = explorers.map( ({ stack }) => arrStacks.push( stack ) )
console.log(arrStacks)