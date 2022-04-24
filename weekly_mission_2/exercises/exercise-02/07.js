import explorers from "./explorers.js";

// todo: Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const frontValidator = explorers.some( ({ missions }) => {
    const { exercisesFinished } = missions.frontend
    return exercisesFinished
})
console.log(frontValidator)