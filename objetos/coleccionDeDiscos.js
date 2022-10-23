const coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: 'Bee Gees Greatest',
        artista: 'Bee Gees',
        canciones: [
            'stayin alive'
        ]
    },
    5439: {
        tituloDelAlbum: 'ABBA Gold'
    }
};
function actualizarDiscos(discos, id, propiedad, valor) {
    //si el valor es una cadena vacia
    if (valor === "") {
        delete discos[id][propiedad];

    } else if (propiedad === "canciones") {

        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);


    } else {
        discos[id][propiedad] = valor;
    }


}

console.log(JSON.stringify(coleccionDeDiscos));


console.log(coleccionDeDiscos[5439].tituloDelAlbum);
console.log(actualizarDiscos(coleccionDeDiscos,5439,"canciones","Mamma Mia"));
console.log(actualizarDiscos(coleccionDeDiscos,5439,"canciones","Bella"));
console.log(coleccionDeDiscos[5439].tituloDelAlbum);
console.log(JSON.stringify(coleccionDeDiscos));

// console.log(coleccionDeDiscos);
// console.log(coleccionDeDiscos[7853]);
// console.log(coleccionDeDiscos[5439]);

// console.log(coleccionDeDiscos[7853].tituloDelAlbum);
// console.log(coleccionDeDiscos[7853].artista);
// console.log(coleccionDeDiscos[7853].canciones[0]);

// console.log(coleccionDeDiscos[5439].tituloDelAlbum);
// console.log(coleccionDeDiscos[5439].artista);
// console.log(coleccionDeDiscos[5439].canciones);

// coleccionDeDiscos[5439].artista="MJ";

// coleccionDeDiscos[5439].canciones=[];
// coleccionDeDiscos[5439].canciones[0]="billy jean";
// coleccionDeDiscos[5439].canciones.push("billy jean");
// console.log(coleccionDeDiscos[5439].canciones);
//console.log(JSON.stringify(coleccionDeDiscos));





