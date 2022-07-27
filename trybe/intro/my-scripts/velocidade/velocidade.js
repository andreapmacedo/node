const readline = require('readline-sync');

const velocidadeMedia = (distancia, tempo) => {
  return distancia / tempo;
}

function main () {
  let distancia = readline.questionFloat('Qual a distância percorrida? ');
  let tempo = readline.questionFloat('Qual o tempo gasto? ');
  console.log(`A velocidade média foi de ${velocidadeMedia(distancia, tempo)} Km/h.`);
}

main();

