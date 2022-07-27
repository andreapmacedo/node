const readline = require('readline-sync');

console.log('Olá, bem-vindo ao IMC!');


// function printMessage(message) {
// }

const printMessage = (nome, message) => {
  if (message < 18.5) {
    return `${nome} seu IMC é ${message} e você está abaixo do peso.`;
  } else if (message >= 18.5 && message <= 24.9) {
    return `${nome} seu IMC é ${message} e você está no peso ideal.`;
  } else if (message >= 25 && message <= 29.9) {
    return `${nome} seu IMC é ${message} e você está acima do peso.`;
  } else {
    return `${nome} seu IMC é ${message} e você está obeso.`;
  }
}


function main () {
  let nome = readline.question('Qual o seu nome? ');
  let peso = readline.questionFloat('Qual o seu peso? ');
  let altura = readline.questionFloat('Qual a sua altura? ');
  let imc = peso / (altura * altura);
  console.log(printMessage(nome, imc));
  // console.log(`${nome} seu IMC é ${imc}`);
}

main();