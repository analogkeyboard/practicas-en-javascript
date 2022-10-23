//creacion de una clase
class TransbordadorEspacial {
    constructor(planeta) {
        this.planeta = planeta;
    }
}

let zeus= new TransbordadorEspacial("venus");
console.log(TransbordadorEspacial);
console.log(JSON.stringify(zeus));
console.log(zeus.planeta);

let apolo = new TransbordadorEspacial("marte");
console.log(apolo.planeta);

//ejemplo
class Mascota{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
}

let miMascota = new Mascota("nora",5);
console.log(miMascota);
console.log(miMascota.nombre);
console.log(miMascota.edad);