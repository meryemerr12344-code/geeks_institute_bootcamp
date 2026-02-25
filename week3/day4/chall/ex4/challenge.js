// challenge.js

const greet = require("./greeting");
const showColorfulMessage = require("./colorful-message");
const readFileContent = require("./read-file");

console.log(greet("Meryem"));
console.log("\n🎨 Colorful Message:");
showColorfulMessage();

console.log("\n📄 Reading File:");
readFileContent();