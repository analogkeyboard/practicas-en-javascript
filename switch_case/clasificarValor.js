function clasificarValor(valor) {
  let respuesta;
  switch (valor) {
    case 1:
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3:
      respuesta = "gama";
      break;
    case 4:
      respuesta = "delta";
      break;
    default:
      respuesta="Opcion no valida";
      break;
  }
  return respuesta;
}

console.log(clasificarValor(1));
console.log(clasificarValor(2));
console.log(clasificarValor(3));
console.log(clasificarValor(4));
console.log(clasificarValor(5));