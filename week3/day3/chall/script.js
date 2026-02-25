const apiKey = "meryem";

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");
const switchBtn = document.getElementById("switchBtn");

// Fetch Supported Currencies
async function loadCurrencies() {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/codes`
    );
    const data = await response.json();

    const currencies = data.supported_codes;

    currencies.forEach(currency => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");

      option1.value = currency[0];
      option1.textContent = currency[0];

      option2.value = currency[0];
      option2.textContent = currency[0];

      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    });

    fromCurrency.value = "USD";
    toCurrency.value = "EUR";

  } catch (error) {
    console.error("Error loading currencies:", error);
  }
}

// Convert Function
async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (amount === "") {
    alert("Enter amount");
    return;
  }

  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`
    );

    const data = await response.json();

    if (data.result === "success") {
      result.textContent = `${amount} ${from} = ${data.conversion_result} ${to}`;
    } else {
      result.textContent = "Conversion failed.";
    }

  } catch (error) {
    console.error("Error converting:", error);
  }
}

// Switch currencies (BONUS)
switchBtn.addEventListener("click", () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  convertCurrency();
});

convertBtn.addEventListener("click", convertCurrency);

loadCurrencies();