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
  



// Create a new user
app.post("/users", async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
  
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  