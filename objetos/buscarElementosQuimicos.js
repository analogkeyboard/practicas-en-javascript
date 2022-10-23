function buscarElementoQuimico(simbolo) {
  const simbolosQuimicos={
    "AL":"Aluminio",
    "S":"Azufre",
    "CL":"Cloro",
    "He":"Helio",
    "B":"Boro",
    "Li":"Litio"
  };

  return simbolosQuimicos[simbolo];

}

console.log(buscarElementoQuimico("AL"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("CL"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));