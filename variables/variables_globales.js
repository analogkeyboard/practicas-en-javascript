//variable global
var miVariableGlobal=5;

//variable global por consola
console.log("Variable global : "+miVariableGlobal);


function miFuncion(params) {
  //variable global dentro de una funcion
  console.log("Variable global dentro de una funcion: "+miVariableGlobal);
}

//llamada a la funcion
miFuncion();

//variable global al final del archivo por consola
console.log("Variable global fuera de la funcion: "+miVariableGlobal);