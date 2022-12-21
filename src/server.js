import express from "express";

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  return res.send(`<h1>http://localhost:${PORT}/</h1>`);
});

app.get("/about", (req, res) => {
  return res.send(`<h1>http://localhost:${PORT}/about</h1>`);
});

app.get("/contact", (req, res) => {
  return res.send(`<h1>http://localhost:${PORT}/contact</h1>`);
});

app.get("/login", (req, res) => {
  return res.send(`<h1>http://localhost:${PORT}/login</h1>`);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
