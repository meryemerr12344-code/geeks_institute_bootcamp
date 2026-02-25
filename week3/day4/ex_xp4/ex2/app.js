import { persons } from "./data.js";

function calculateAverageAge(arr) {
  const total = arr.reduce((sum, person) => sum + person.age, 0);
  const average = total / arr.length;
  console.log("Average age:", average);
}

calculateAverageAge(persons);