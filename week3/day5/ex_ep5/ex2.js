const express = require("express");
const app = express();

app.use(express.json());

const PORT = 5000;

let books = [
  { id: 1, title: "Clean Code", author: "Robert Martin", publishedYear: 2008 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 }
];


// Read all
app.get("/api/books", (req, res) => {
  res.json(books);
});


// Read one
app.get("/api/books/:bookId", (req, res) => {
  const id = parseInt(req.params.bookId);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});


// Create
app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);

  res.status(201).json(newBook);
});


app.listen(PORT, () => {
  console.log(`Book API running on http://localhost:${PORT}`);
});