function miFuncion() {
  console.log("hola");
  return "mundo";
  console.log("adios");
}

console.log(miFuncion());

function CalcularRaizCuadrada(numero) {
  if (numero < 0) {
    return undefined;
  }
  return Math.sqrt(numero);
}
console.log("\n");

console.log(CalcularRaizCuadrada(144));
console.log(CalcularRaizCuadrada(-10));