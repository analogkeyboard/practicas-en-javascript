const crearPersona = (nombre, edad, idioma) => {
    return {
        nombre: nombre,
        edad: edad,
        idioma: idioma,
    };
};

console.log(JSON.stringify(crearPersona("marla", 20, "ingles")));

//
const crearPersona2 = (nombre, edad, idioma) => ({ nombre, edad, idioma });

console.log(JSON.stringify(crearPersona2("marla",21,"frances")));