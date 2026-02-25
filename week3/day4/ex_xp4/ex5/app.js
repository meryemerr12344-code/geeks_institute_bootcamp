const _ = require("lodash");
const math = require("./math");

console.log("Addition:", math.add(5, 3));
console.log("Multiplication:", math.multiply(4, 2));

const numbers = [1, 2, 3, 4, 5];
console.log("Max number using lodash:", _.max(numbers));