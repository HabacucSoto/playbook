import explorers from "./explorers.js";

// todo: Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const onbValidator = explorers.every( ({ missions }) => {
    const { isFinished } = missions.onboarding
    return isFinished
})
console.log(onbValidator)