//plantillas literales o plantillas de cadenas
let a = 6;
console.log(`El valor de a es ${a}`);

let nombre = "andrea";
let edad = 20;

console.log(`Hola mi nombre es ${nombre}\nTengo ${edad} años de edad`);

let arreglo = [1, 2, 3, 'a', 'b', 'c'];
console.log(`El arreglo tiene los elementos ${JSON.stringify(arreglo)}`);


const persona = {
    nombre: "gina",
    edad: 10
};
console.log(JSON.stringify(persona));

const SALUDO = `HOla mi nombre es ${persona.nombre} y tengo ${persona.edad} años`;

console.log(SALUDO);