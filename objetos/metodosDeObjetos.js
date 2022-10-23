//metodos de objetos
//forma 1
const persona={
    nombre:"isabel",
    presentarse:function() {
        return `Hola mi nombre es ${this.nombre}`
    }
};

console.log(JSON.stringify(persona));
console.log(persona.presentarse());

//forma 2
const persona2={
    nombre:"isabel",
    presentarse() {
        return `Hola mi nombre es ${this.nombre}`
    }
};

console.log(JSON.stringify(persona2));
console.log(persona2.presentarse());