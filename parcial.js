/* Se crean 15 ciudades, cada una con 100 pts de vida
caen meteoritos aleatoriamente y restan 30 puntos.*/

const prompt = require('prompt-sync')();

let vida = [100, 100, 100, 100, 100, 100, 100, 100 ,100, 100, 100, 100, 100, 100, 100]
let check = false;

function meteoritos() {
    let daño = Math.floor(Math.random() * 30)
    let ciudad = Math.floor(Math.random() * 14)
    if (vida[ciudad] >= daño){
        vida[ciudad] -= daño
        console.log("El meteorito cayo en la ciudad " + ciudad + " y le hizo " + daño + " puntos de daño ");
        console.log("-----------------");
        
    } else {
        meteoritos()
    }
}
function mostrarCiudades() {
    for (let i = 0; i < vida.length; i++) {
        console.log("Ciudad: " + i + ", Puntos de vida: " + vida[i]);
    }
    console.log("-----------------");
    
}
function display() {
    console.log("Que comience el juego...\n digite la opcion que desee:\n 1. Tirar meteorito\n 2. Mostrar ciudades \n 3. Salir\n...")
    let opcion = prompt("");
    switch (opcion) {
        case "1":
            check = false;
            for (let i = 0; i < vida.length; i++) {
                if (vida[i] !== 0) {
                    check = true;
                }
            }
            if (check == true){
                meteoritos();
                display();
            } else {
                console.log("Fin del juego, todas las ciudades han sido destruidas");
            }
            break;
        case "2":
            mostrarCiudades();
            display();
        default:
            break;
    }
}

display();
