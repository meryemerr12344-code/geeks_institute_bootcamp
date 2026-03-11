//Exercise 1:
db.students.insertMany([
  { name: "zakaria", age: 19, city: "Rabat", major: "AI" },
  { name: "mery", age: 26, city: "Paris", major: "Cybersecurity" },
  { name: "Kaito", age: 22, city: "Tokyo", major: "Web Dev" },
  { name: "Elena", age: 31, city: "Madrid", major: "Data Science" },
  { name: "Marcus", age: 24, city: "New York", major: "AI" }
])
//Exercise 2
db.students.find({
  age: { $gte: 18, $lte: 25 }
})
db.students.updateOne(
  { name: "zakaria" },
  { $set: { city: "Casablanca" } }
)
db.students.deleteOne({ name: "mery" })

db.students.updateMany(
  { major: "AI" },
  { $set: { major: "Generative AI" } }
)