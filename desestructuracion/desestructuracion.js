//desestructuracion
const usuario = {
    nombre: "gino",
    edad: 34
};


//forma anterior
// const nombre=usuario.nombre;
// const edad=usuario.edad;
// console.log(nombre);
// console.log(edad);

//forma nueva
const { nombre, edad } = usuario;
console.log(JSON.stringify(usuario));

//ejemplo

const coordenadas = {
    x: 4,
    y: 6,
    z: 12
};

const{x,y,z}=coordenadas;
console.log(coordenadas);