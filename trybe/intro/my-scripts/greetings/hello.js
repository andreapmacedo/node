// console.log('Hello World');

function sayHello() {
    return 'Hello World';
}

function sayHelloParam(name) {
    return `Hello World ${name}`;
}

// console.log(sayHello());
// console.log(sayHelloParam('André'));

// export default sayHello; // ES6 
// module.exports = sayHelloParam; // CommonJS -- uma função por vez
module.exports = { sayHello, sayHelloParam }; // CommonJS -- várias funções por vez