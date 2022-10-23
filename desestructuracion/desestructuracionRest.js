let a;
let b;
let arr;

[a, b, ...arreglo] = [1, 2, 3, 4, 5];

console.log(a);
console.log(b);
console.log(arreglo);

//
const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];

function removerTresPrimerosElementos(arreglo) {
    // let nuevoArreglo;
    // [, , , ...nuevoArreglo];
    const [, , , ...nuevoArreglo] = arreglo;
    return nuevoArreglo;
}

const arregloFinal=removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);