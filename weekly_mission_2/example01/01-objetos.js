// todo: 1. Crea un objeto vacío
const obj = {}
console.log('1.')
console.log(obj)


// todo: 2. Crear un objeto con propiedades
const props = {
    name: 'Habacuc',
    lastName: 'Soto',
    age: 18
}
console.log('2.')
console.log(`Name: ${ props.name }  Age: ${ props.age }`)


// todo: 3. Crear un objeto con propiedades diferentes
const variousProps = {
    name: 'Juan',
    wife: 'Diana',
    sons: [
        { name: 'Gerardo', lastName: 'Reyes' },
        { name: 'Paola', lastName: 'Reyes' }
    ],
    addres: {
        zip_code: 94470,
        street: 2,
        city: 'Córdoba'
    }
}
console.log('3.')
console.log(`Name: ${ variousProps.name }  Sons: `)
variousProps.sons.forEach( n => console.log(n.name) )


// todo: 4. Crear un objeto con métodos
const methods = {
    pokemon: 'squirtle',
    greeting: () => console.log('hellooo!')
}
console.log('4.')
console.log(`Pokemon: ${ methods.pokemon }  Greeting:`)
methods.greeting()


// todo: 5. Crear un objeto que reciba parámetros
const params = {
    pokemon: 'Arceus',
    greeting: name => console.log(`whats up ${ name }!`) 
}
console.log('5.')
console.log(`Pokemon: ${ params.pokemon }  Greeting: `)
params.greeting('Habacuc')