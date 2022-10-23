//funcion que imprime el mensaje hola mundo
function HolaMundo(params) {
  console.log("Hola mundo desde una funcion en JS");
}

//llamada a la funcion
HolaMundo();

//funcion que recibe 2 valores como parametros
// y guarda la suma en una variable
//el resultado se imprime por consola
function sumar(a,b) {
  suma=a+b;
  console.log(a + " + "+b+" = "+suma);
}

//llamada a la funcion suma
sumar(4,5);
sumar(5,6);

var n1=5;
var n2=5;

sumar(n1,n2);

//funcion para concatenar 3 cadenas de texto
function concatenar3cadenas(cadena1,cadena2,cadena3) {
  console.log(cadena1+" "+cadena2+" "+cadena3);
}

//llamada a la funcion
concatenar3cadenas("Estoy","aprendiendo a","programar");

