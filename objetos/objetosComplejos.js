const ordenesDePizza = [
  {
    tipo: 'margarita',
    tamaño: 'individual',
    precio: 5.67,
    toppings: [
      'extra queso',
      'champiñones',
      'piña'
    ],
    paraLlevar: true
  },
  {
    tipo: 'cuatro quesos',
    tamaño: 'familiar',
    precio: 18.34,
    toppings: [
      'extra queso',
      'pimenton',
      'piña'
    ],
    paraLlevar: false
  },
  {
    tipo: 'napolitana',
    tamaño: 'individual',
    precio: 6.78,
    toppings: [],
    paraLlevar: true
  }
];

console.log(ordenesDePizza[0]);
console.log(ordenesDePizza[1]);
console.log(ordenesDePizza[0]['toppings']);
console.log(ordenesDePizza[0].toppings[1]);
console.log(ordenesDePizza[1]);


