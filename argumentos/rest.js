'use strict';
//operador rest ...
function miFuncion(...args) {
    console.log("Argumentos: "+JSON.stringify(args));
    console.log("Numero de argumentos: "+args.length);
}

miFuncion(1,5,'5')
miFuncion([2,3],[4,5])

const sumar=(...args)=>{
    return args.reduce((a,b)=>a+b,0);
}

console.log(sumar(4,5,6));