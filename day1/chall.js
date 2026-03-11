db.products.insertMany([
  {
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    stock: 15
  },
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: 200,
    stock: 8
  },
  {
    name: "Eco Notebook",
    category: "Stationery",
    price: 5,
    stock: 100
  },
  {
    name: "Bamboo Pen",
    category: "Stationery",
    price: 2,
    stock: 3
  },
  {
    name: "LED Desk Lamp",
    category: "Home",
    price: 40,
    stock: 20
  }
])
db.products.find({ stock: { $lt: 10 } })

db.products.updateMany(
  { category: "Electronics" },
  { $mul: { price: 1.1 } }
)
db.products.find().sort({ price: -1 }).limit(1)