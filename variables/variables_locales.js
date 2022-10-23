//variable global
var miVariableLocal=5

function miFuncion(params) {
  //variable global
  var miVariableLocal=4;

  //la variable local tiene prioridad sobre la variable global
  console.log(miVariableLocal);
}

miFuncion();

//la variable global se muestra despues de la variable local
console.log(miVariableLocal);
