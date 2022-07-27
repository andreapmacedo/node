// import sayHello from './hello'; // ES6
// console.log(sayHello());



const greetings = require('./hello');  // CommonJS


console.log(greetings.sayHelloParam('André'));
console.log(greetings.sayHello());

const {sayHello} = require('./hello');  // CommonJS -- using destructuring
console.log(sayHello());