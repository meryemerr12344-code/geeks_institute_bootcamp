//Exercise 1:
db.users.insertOne({
  name: "meryem",
  email: "meryem@gmail.ma",
  address: {
    city: "rabat",
    country: "Morocco",
    postalCode: "20000"
  }
})

//Exercise 2:
db.orders.insertOne({
  orderNumber: "ORD-99X",
  total: 1500,
  currency: "MAD",
  status: "Processing",
  userId: ObjectId("65a9f1b3e4b0c123456789ab")
})