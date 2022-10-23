const miPerro={
  "nombre":"Gino",
  "edad":5,
  "peso":6,
  "raza":"Beagle",
};

console.log(JSON.stringify(miPerro));

console.log("Nombre: "+miPerro.nombre);
console.log("edad: "+miPerro.edad);
console.log("peso: "+miPerro.peso);
console.log("raza: "+miPerro.raza);

const miMochila={
  color:"azul",
  tamaño:"mediano",
  contenido:["botella","agua"]
};
console.log("\nMi mochila: "+JSON.stringify(miMochila));
console.log("Color de la mochila: "+miMochila.color);
miMochila.color="verde";
console.log("Color nuevo de la mochila: "+miMochila.color);


console.log("Contenido de la mochila: "+miMochila.contenido);
miMochila.contenido.push("lapiz");
console.log("Lapiz agregado: "+miMochila.contenido);

miMochila.contenido=["cuaderno","colores","tijeras"]
console.log("Nuevo contenido de la mochila: "+miMochila.contenido);
console.log("Mi mochila: "+JSON.stringify(miMochila));

const miCurso={
titulo:"JavaScript",
idioma:"Español",
duracion:30
};

miCurso.vistas=34500;
console.log("Propiedad vistas agregada: "+miCurso.vistas);
console.log("\nMi Curso: "+JSON.stringify(miCurso));

delete miCurso.vistas
console.log("\nMi Curso: "+JSON.stringify(miCurso));
console.log(miCurso.vistas);
// console.log(miPerro);

// console.log("\n\n");
// for (const propiedad in miPerro) {
//   console.log(propiedad+":"+miPerro[propiedad]);
// }