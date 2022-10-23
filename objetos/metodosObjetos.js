//creacion literal del objeto
const persona = {
    nombre: "jane",
    apellido: "doe",
    edad: 10,
    colorDeOjos: "azul"
};
console.log("Persona 1: "+JSON.stringify(persona));

//creacion vacia del objeto
const persona2={};

//agregando propiedades
persona2.nombre="tania";
persona2.apellido="doe";
persona2.edad=20;
persona2.colorDeOjos="verdes";
console.log("\nPersona 2: "+JSON.stringify(persona2));

//creacion del objeto usando new Object()
const persona3=new Object();
persona3.nombre="andy";
persona3.apellido="doe";
persona3.edad=25;
persona3.colorDeOjos="morados";
console.log("\nPersona 3: "+JSON.stringify(persona3));

//agregar propiedades
persona3.altura="160 cm";
console.log("\nPersona 3: "+JSON.stringify(persona3));
console.log("\nPropiedad altura de persona 3: "+persona3.altura);