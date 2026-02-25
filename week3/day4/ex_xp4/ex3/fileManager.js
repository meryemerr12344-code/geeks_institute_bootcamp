const fs = require("fs");

function readFile(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  return data;
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

module.exports = { readFile, writeFile };