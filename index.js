const { readCard, addPet } = require('./controllers/operaciones.js')

const path = './data/pets.json'

const [fx, ...args] = process.argv.slice(2)
const [nombre, edad, animal, color, enfermedad] = args;

switch (fx) {

    case 'readCard':
        console.log(readCard(path))
        break;

    case 'addPet':
        addPet(path, nombre, Number(edad), animal, color, enfermedad);
        break;

        default:
            console.log('Lo siento no entiendo esa función ')
            break;
}



