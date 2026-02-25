
//excercice 1 
/* // Giphy API URL
const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fetch data from Giphy API
fetch(url)
  .then(response => {
    // Check if the response status is OK (status code 200–299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Convert response to JSON
    return response.json();
  })
  .then(data => {
    // Log the JavaScript object received
    console.log(data);
  })
  .catch(error => {
    // Catch and log any errors
    console.error("Error fetching data:", error);
  });*/
  //exercise 2
  // Giphy API key (public beta key)
const apiKey = "YOUR_API_KEY"; 
// You can use: "dc6zaTOxFJmzC" (public beta key) if allowed by your teacher

const url = `https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=${apiKey}`;

fetch(url)
  .then(response => {
    // Check if response status is OK (status 200–299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Log the full JavaScript object received
    console.log(data);
  })
  .catch(error => {
    // Catch any errors (network error, bad status, etc.)
    console.error("Error fetching data:", error);
  });
  // Exercise 3
  async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    // Check if response is OK (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data.result);

  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

// Call the function
getStarship();