let contactos=[
    {
        nombre:"nora",
        apellido:"nav",
        numero:"0543236543",
        gustos:[
            "pizza","programacion"
        ]
    },
    {
        nombre:"harry",
        apellido:"potter",
        numero:"0994372684",
        gustos:[
            "hogwarts","magia"
        ]
    },
    {
        nombre:"sherlock",
        apellido:"holmes",
        numero:"0487345643",
        gustos:[
            "casos interesantes","violin"
        ]
    }
];


function buscarPerfil(nombre,propiedad) {
    for (let i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre==nombre) {
            return contactos[i][propiedad]||"La propiedad no existe.";
        }
    }
    return "El contacto no esta en la lista."
}
console.log(buscarPerfil("sherlockk","sgustos"));

