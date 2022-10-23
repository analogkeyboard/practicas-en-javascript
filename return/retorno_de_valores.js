//funcion que retorna(devuelve) un valor
function sumar(a, b) {
  return a + b;
}

//para mostrar el valor de la funcion se usa la consola
console.log("La suma de 5 + 3 es: " + sumar(5, 3));

//funcion que muestra la suma de 2 numeros
//y ademas retorna el valor por default undefined
function sumar2(a,b) {
  console.log(a+b);
  
}

console.log(sumar2(5,3));

//asignar el valor retornado a una variable y mostrada en consola
var funcion_suma=sumar(3,3);
console.log("Variable funcion_suma: "+funcion_suma);
