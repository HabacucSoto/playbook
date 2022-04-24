import explorers from "./explorers.js";

// todo: Busca el primer explorer que sea de la CDMX, usa FIND
const fromCDMX = explorers.find( ({ city }) => city.match('CDMX'))
console.log(fromCDMX)