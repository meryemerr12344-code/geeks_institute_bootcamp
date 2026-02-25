// colorful-message.js

const chalk = require("chalk");

function showColorfulMessage() {
  console.log(
    chalk.blue("This is blue text!") +
    "\n" +
    chalk.green.bold("This is bold green text!") +
    "\n" +
    chalk.red.underline("This is underlined red text!")
  );
}

module.exports = showColorfulMessage;