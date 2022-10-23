function retornarValorMinimo(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(retornarValorMinimo(4, 5));
console.log(retornarValorMinimo(6, 5));

//uso del operador ternario
function retornarValorMinimo2(x, y) {
    return x < y ? x : y;
}

console.log(retornarValorMinimo2(4, 5));
console.log(retornarValorMinimo2(6, 3));


let a = 10;
let b = 9;

console.log(a > b ? a + 2 : b * 3);