function proximoEnLaFila(arreglo,elemento) {
  
  arreglo.push(elemento)
 return arreglo.shift()
 
}
let miArreglo=[2,3,4,5];

console.log("Antes: "+JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo,6));
console.log("Despues: "+JSON.stringify(miArreglo));