
const miReceta = {
  descripcion: 'mi postre favorito',
  costo: 15.6,
  ingredientes: {
    masa: {
      harina: '100 gramos',
      sal: '1 cucharada',
      agua: '1 taza'
    },
    cobertura: {
      azucar: '120 gramos',
      chocolate: '4 cucharadas',
      mantequilla: '200 gramos'
    } 
  }
};

console.log(JSON.stringify(miReceta));
console.log("\n"+miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.cobertura.mantequilla);
console.log(miReceta.ingredientes.cobertura);
