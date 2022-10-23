//const
//la variable declara por primera vez ya no puede ser cambiada

const miConstante = 10;
// miConstante = 11;
console.log(miConstante); 

function calcularAreaCirculo(radio) {
    const PI = 3.14;
    area = radio < 0 ? undefined : PI * (radio ** 2);
    return area;
}

console.log(calcularAreaCirculo(10));
console.log(calcularAreaCirculo(-10));