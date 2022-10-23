function compararNumeros(a, b) {
    if (a == b) {
        return "a y b son iguales";
    } else if (a > b) {
        return "a es mayor que b";

    } else {
        return "a es menor que b";

    }
}

console.log(compararNumeros(1, 2));
console.log(compararNumeros(3, 2));
console.log(compararNumeros(3, 3));

//operador ternario multiple
function compararNumeros2(a, b) {
    return a == b ? "a y b igual"
            : a > b ? "a es mayor que b"
            : "b es mayor que a";
}

console.log(compararNumeros2(11,27));
console.log(compararNumeros2(31,27));
console.log(compararNumeros2(31,31));