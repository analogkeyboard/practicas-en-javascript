'strict use';
const usuario = {
    johnDoe: {
        edad: 27,
        correo: "jd@dom.com"
    }
};
//desestructuracon de objetos anidados
const { johnDoe: { edad, correo } } = usuario;
console.log(JSON.stringify(usuario));

//desestructuracon de objetos anidados con nombres personalizados en las propiedades
const { johnDoe: { edad: edadUsuario, correo: correoUsuario } } = usuario;
console.log(JSON.stringify(edadUsuario));

//ejemplo
const PRONOSTICO_LOCAL = {
    ayer: {
        minima: 61,
        maxima: 75
    },
    hoy: {
        minima: 64,
        maxima: 77
    },
    mañana: {
        minima: 68,
        maxima: 80
    }
};

const { ayer: { minima: minimoAyer, maxima: maximaAyer } } = PRONOSTICO_LOCAL;
const { hoy: { minima: minimoHoy, maxima: maximaHoy } } = PRONOSTICO_LOCAL;
const { mañana: { minima: minimoMañana, maxima: maximaMañana } } = PRONOSTICO_LOCAL;
console.log(minimoAyer, maximaAyer);
console.log(minimoHoy, maximaHoy);
console.log(minimoMañana, maximaMañana);
console.log(PRONOSTICO_LOCAL);