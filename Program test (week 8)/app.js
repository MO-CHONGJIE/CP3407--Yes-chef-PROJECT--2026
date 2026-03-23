const express = require("express");
const app = express();

app.use(express.json());

// fake data for testing only
const users = [];
const menu = [
  { id: 1, name: "Kung Pao Chicken", price: 18 },
  { id: 2, name: "Mapo Tofu", price: 15 },
  { id: 3, name: "Milk Tea", price: 6 }
];

// User Story 1: Register
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  users.push({ name, email, password });
  return res.status(201).json({ message: "User registered successfully" });
});

// User Story 2: Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  return res.status(200).json({ message: "Login successful" });
});

// User Story 3: View Menu
app.get("/menu", (req, res) => {
  return res.status(200).json(menu);
});

module.exports = app;