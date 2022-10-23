//setters y getters

class Libro {
    constructor(autor) {
        //propiedad privada
        this._autor = autor;
    }

    //getter
    get autor() {
        console.log("getter");
        return this._autor;
    }
    
    //setter
    set autor(nuevoAutor) {
        console.log("setter");
        this._autor = nuevoAutor;
    }
}

const libro = new Libro("anonimo");
console.log(Libro);
console.log(JSON.stringify(libro));
console.log(JSON.stringify(libro._autor));
console.log(JSON.stringify(libro.autor));

libro.autor="gino";
console.log(libro.autor);

