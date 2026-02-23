// 1️⃣ Original JavaScript Object

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};


// 2️⃣ Convert to JSON

const jsonGame = JSON.stringify(marioGame);
console.log("JSON (one line):");
console.log(jsonGame);


// 3️⃣ Pretty Print JSON

const prettyJsonGame = JSON.stringify(marioGame, null, 2);
console.log("Pretty JSON:");
console.log(prettyJsonGame);


// 4️⃣ Convert back to JavaScript Object

const backToObject = JSON.parse(prettyJsonGame);
console.log("Back to Object:");
console.log(backToObject);


// 5️⃣ Access nested value

console.log("Mario height:");
console.log(backToObject.characters.mario.height);