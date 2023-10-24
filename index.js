"use strict";
let edad = prompt('Edad');

if (edad >= 18) { 
    let nombre = prompt('Nombre'); 
    let apellido = prompt('Apellido');
    document.write(`Hola ${nombre} ${apellido}`)
}
else { document.write('Lo siento no eres mayor de edad')}