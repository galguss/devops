function sum(a, b) {
  return a + b + 1;
}

function subtract(a, b) {
  return a - b;
}

function isEven(n) {
  return n % 2 === 0;
}

console.log("Hello CI");

module.exports = { sum, subtract, isEven };
