const { existsSync, readFileSync, writeFileSync, appendFileSync} = require('fs');

const readCard = (path) => {

    let response
    if (!existsSync(path)) {
        response =JSON.stringify([], null, 2)
        appendFileSync(path, response)
    } else {
        response = readFileSync(path, 'utf-8');
    }

    return JSON.parse(response)

}

const addPet = (path, nombre, edad, animal, color, enfermedad) => {

    const prevPets = readCard(path)
    const pet = {
         nombre,
         edad, 
         animal,
         color,
         enfermedad
    }
    
    const newList = [
        ...prevPets,
        pet
    ]

    writeFileSync(path, JSON.stringify(newList, null, 2))

    console.log('Ficha guardada! \n')
    console.table(pet)
}

module.exports = {
    readCard,
    addPet
}