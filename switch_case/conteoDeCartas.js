let contador=0;
function conteoDeCartas(carta) {
  let decision;

  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:

      contador++;
      break;

    case 7:
    case 8:
    case 9:

      contador=0;
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      contador--;
      break;
  }

  if (contador>0) {
    decision="Apostar";
  } else {
    decision="Esperar";
    
  }
  return "Carta: "+carta+"\tConteo: "+contador+"\tDecision: "+decision;
}

console.log(conteoDeCartas(2));
console.log(conteoDeCartas(5));
console.log(conteoDeCartas(7));
console.log(conteoDeCartas('J'));
console.log(conteoDeCartas(1));
console.log(conteoDeCartas('Q'));
console.log(conteoDeCartas(8));
console.log(conteoDeCartas('A'));