const fs = require("fs");

const data = fs.readFileSync("source.txt", "utf8");
fs.writeFileSync("destination.txt", data);

console.log("File copied successfully!");