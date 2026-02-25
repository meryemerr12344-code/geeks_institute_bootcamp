const products = require("./products");

function findProduct(productName) {
  const product = products.find(p => p.name === productName);

  if (product) {
    console.log("Product found:", product);
  } else {
    console.log("Product not found");
  }
}

findProduct("Laptop");
findProduct("Shoes");
findProduct("Tablet");