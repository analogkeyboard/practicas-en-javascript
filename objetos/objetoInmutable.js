'use strict';
//objeto inmutable

const colores = {
    verde: "#10e04b",
    azul: "#1b50e0",
    negro: "#000000",
    blanco: "#ffffff"
};

//metodo freeze
Object.freeze(colores);
//delete colores.verde;
// colores.amarillo="#fff200";
console.log(colores);