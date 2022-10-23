//creacion del arreglo
let arreglo_frutas=["pera","manzana","sandia","naranja"]

//mostrar arreglo
console.log(arreglo_frutas);

//tamaño del arreglo
console.log("Elementos del arreglo: "+arreglo_frutas.length);

//acceder al elemento del arreglo
console.log("Elemento 0: "+arreglo_frutas[0]);
console.log("Elemento 1: "+arreglo_frutas[1]);
console.log("Elemento 2: "+arreglo_frutas[2]);
console.log("Elemento 3: "+arreglo_frutas[3]);

console.log("\n");
//acceder al ultimo elemento hasta el primero
console.log("Elemento -1: "+arreglo_frutas[arreglo_frutas.length-1]);
console.log("Elemento -2: "+arreglo_frutas[arreglo_frutas.length-2]);
console.log("Elemento -3: "+arreglo_frutas[arreglo_frutas.length-3]);
console.log("Elemento -4: "+arreglo_frutas[arreglo_frutas.length-4]);

console.log("\nArreglo recorrido con ciclo for\n\n");
//recorrer el arreglo con ciclo for
for (let i = 0; i < arreglo_frutas.length; i++) {
   console.log("["+i+"] = "+arreglo_frutas[i]);
  
}

console.log("\nArreglo recorrido con ciclo forEach\n\n");

arreglo_frutas.forEach(fruta => console.log(fruta));

console.log("\nArreglo recorrido con ciclo for..in\n\n");

for (const elemento in arreglo_frutas) {
  console.log(elemento+"="+arreglo_frutas[elemento]);
}

//uso de for..in con un objeto
let triangulo={
  a:1,
  b:2,
  c:3

}
console.log("\n");
for (const prop in triangulo) {
    
  console.log(`triangulo.${prop} = ${triangulo[prop]}`);
}

console.log("\n");
for (const prop in triangulo) {
    
  console.log(prop +"="+ triangulo[prop]);
}

console.log("\nArreglo recorrido con ciclo for..of\n\n");
//uso de for..of
for (const valor of arreglo_frutas) {
  console.log(valor);
}


//agregar un elemento al final del arreglo
let animales=["perro","gato","conejo"];
console.log("\nAnimales: "+animales);
animales.push("caballo");
console.log("Animales con caballo agregado: "+animales);

//eliminar el ultimo elemento del arreglo
let colores=["azul","rojo","verde","negro"];
console.log("\nColores: "+colores);
colores.pop()
console.log("Colores con el ultimo elemento eliminado: "+colores);


//agregar un elemento al inicio del arreglo
let nombres=['karen','joselyn','karla'];
console.log("\n\nNombres: "+nombres);
nombres.unshift('laura');
console.log("Nombres con elemento agregado al inicio: "+nombres);

//eliminar un elemento al inicio del arreglo
let numeros=[1,2,3];
console.log("\n\nNumeros: "+numeros);
numeros.shift();
console.log("Numeros con elemento eliminado al inicio: "+numeros);