const form = document.getElementById("gif-form");
const input = document.getElementById("search-input");
const gifContainer = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const category = input.value.trim();

  if (!category) return;

  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GIF");
    }

    const data = await response.json();

    const gifUrl = data.data.images.original.url;

    // Create GIF container
    const gifDiv = document.createElement("div");
    gifDiv.classList.add("gif-item");

    const img = document.createElement("img");
    img.src = gifUrl;
    img.width = 300;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";

    // Delete specific GIF
    deleteBtn.addEventListener("click", function () {
      gifDiv.remove();
    });

    gifDiv.appendChild(img);
    gifDiv.appendChild(deleteBtn);
    gifContainer.appendChild(gifDiv);

    input.value = "";

  } catch (error) {
    console.error("Error:", error);
  }
});

// Delete all GIFs
deleteAllBtn.addEventListener("click", function () {
  gifContainer.innerHTML = "";
});