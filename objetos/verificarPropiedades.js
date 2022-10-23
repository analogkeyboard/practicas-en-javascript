let miCuaderno={
color:"verde",
categoria:3,
precio:4.6
};

console.log(miCuaderno.hasOwnProperty("color"));

function verificarPropiedad(objeto,propiedad) {
  if (objeto.hasOwnProperty(propiedad)) {
    return "Propiedad: "+objeto[propiedad];
  }else{
    return "El objeto no tiene esta propiedad";

  }
}

console.log(verificarPropiedad(miCuaderno,"precio"));
console.log(verificarPropiedad(miCuaderno,"color"));
console.log(verificarPropiedad(miCuaderno,"categoria"));
console.log(verificarPropiedad(miCuaderno,"tipo"));
