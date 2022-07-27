const readline = require('readline-sync');


const sorteio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
  let numero = readline.questionInt('Digite um número entre 0 e 10: ');
  let numeroSorteado = sorteio(0, 10);
  if (numero === numeroSorteado) {
    console.log('Você acertou!');
  } else {
    console.log(`Você errou! O número sorteado foi ${numeroSorteado}`);
  }

  let playAgain = readline.question('Deseja jogar novamente? (s/n) ');
  if (playAgain === 's') {
    main();
  }
}

main();