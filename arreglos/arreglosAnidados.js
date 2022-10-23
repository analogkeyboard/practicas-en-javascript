let misPlantas = [
  {
    tipo: 'flores',
    lista: [
      'rosas',
      'tulipanes',
      'dientes de leon'
    ]
  },
  {
    tipo: 'arboles',
    lista: [
      'abeto',
      'pino',
      'abedul'
    ]
  }
];
console.log("Objeto misPlantas: "+JSON.stringify(misPlantas));

console.log(misPlantas[0]);
console.log(misPlantas[0].tipo);
console.log(misPlantas[0].lista);
console.log(misPlantas[1].lista[2]);

//agregar un nuevo elemento arbol
misPlantas[1].lista.unshift("roble");
console.log(misPlantas[1].lista);

//eliminar un elemento flor
misPlantas[0].lista.pop()
console.log(misPlantas[0].lista);

