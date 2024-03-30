const express = require("express");
const User = require("./user");

const app = express();
app.use(express.json());

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Get a single user
app.get("/users/:id", getUser, (req, res) => {
    res.json(res.user);
  });
  