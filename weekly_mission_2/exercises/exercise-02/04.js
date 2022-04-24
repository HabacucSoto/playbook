import explorers from "./explorers.js"

// todo: Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const stackJS = explorers.filter( ({ stack }) => stack.includes( 'js' ) )
console.log(stackJS)