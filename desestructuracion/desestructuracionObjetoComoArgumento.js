const nuevoPerfilCliente = {
    nombre: "a",
    edad: 24,
    nacionalidad: "española",
    ubicacion: "españa"
};

//forma 1 de mostrar el objeto
const actualizarPerfil = (informacionDePerfil) => {
    const { nombre, edad, nacionalidad, ubicacion } = informacionDePerfil;
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};

actualizarPerfil(nuevoPerfilCliente);

//forma 2 de mostrar el objeto
const actualizarPerfil2 = (informacionDePerfil) => {

    console.log(informacionDePerfil);
};

actualizarPerfil2(nuevoPerfilCliente);

//forma 3 de mostrar el objeto
const actualizarPerfil3 = ({ nombre, edad, nacionalidad, ubicacion }) => {

    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};

actualizarPerfil3(nuevoPerfilCliente);

//forma 4 de mostrar el objeto seleccionando las propiedades
const actualizarPerfil4 = ({ nombre, ubicacion }) => {

    console.log(nombre);
    console.log(ubicacion);
};

actualizarPerfil4(nuevoPerfilCliente);


//ejemplo
const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};

const mitad=({max,min})=>(max+min)/2;

console.log(mitad(estadisticas));
