const button = document.getElementById("btn");
const card = document.getElementById("card");

// Function to generate random number (1 - 83)
function getRandomId() {
  return Math.floor(Math.random() * 83) + 1;
}

// Function to display loading spinner
function showLoading() {
  card.innerHTML = `
    <p>Loading...</p>
    <i class="fa-solid fa-spinner fa-spin loading"></i>
  `;
}

// Function to display error
function showError() {
  card.innerHTML = `
    <p class="error">⚠️ Oh no! That person isn’t available.</p>
  `;
}

// Function to fetch character
async function getCharacter() {
  const randomId = getRandomId();
  showLoading();

  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    if (!response.ok) {
      throw new Error("Character not found");
    }

    const data = await response.json();
    const character = data.result.properties;

    // Fetch homeworld
    const homeworldResponse = await fetch(character.homeworld);
    const homeworldData = await homeworldResponse.json();
    const homeworldName = homeworldData.result.properties.name;

    // Display data
    card.innerHTML = `
      <h2>${character.name}</h2>
      <p><strong>Height:</strong> ${character.height}</p>
      <p><strong>Gender:</strong> ${character.gender}</p>
      <p><strong>Birth Year:</strong> ${character.birth_year}</p>
      <p><strong>Homeworld:</strong> ${homeworldName}</p>
    `;

  } catch (error) {
    showError();
  }
}

button.addEventListener("click", getCharacter);