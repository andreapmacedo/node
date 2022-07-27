const { imc } = require('./imc');
const readline = require('readline-sync');
const fs = require('fs');

console.log(imc(1.75, 70));



const askName = () => {
    const answer = readline.question("Qual o seu nome? ")
  
    return answer;
  }
  
  const askHeight = () => {
    const answer = readline.questionFloat("Qual a sua altura? ")
  
    return answer;
  }
  
  const askWeight = () => {
    const answer = readline.questionFloat("Qual o seu peso? ")
  
    return answer;
  }
  
  function main () {
    const name = askName();
    const height = askHeight();
    const weight = askWeight();
  
    const calcImc = imc(height, weight);
  
    const message = `O IMC de ${name} é: ${calcImc}\n`;

    console.log(message);
  
    fs.appendFileSync('imc.txt', message); 
  }
  
  main(); // chamada da função main 