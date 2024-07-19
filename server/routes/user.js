const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const User = require('../models/user');
router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already exists" });

    const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    user = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashPassword,
    }).save();

    // Exclude sensitive data from response
    const userWithoutPassword = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      isStudent: user.isStudent,
      isWorker: user.isWorker,
    };

    res.status(201).send({ message: "User created successfully", user: userWithoutPassword });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/all", async (req, res) => {
  try {
    let users = await User.find({});
    users = users.map((user) => ({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      isStudent: user.isStudent,
      isWorker: user.isWorker,
    }));
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});


// Route to update user role
router.post("api/users/:userId/role", async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  console.log("User ID:", userId); // Debugging line
  console.log("Role:", role); // Debugging line

  try {
    let update = {};

    if (role === "Student") {
      update = { isStudent: true, isWorker: false };
    } else if (role === "Worker") {
      update = { isWorker: true, isStudent: false };
    } else {
      console.error("Invalid role:", role); // Debugging line
      return res.status(400).send({ message: "Invalid role" });
    }

    const user = await User.findByIdAndUpdate(userId, update, { new: true });

    if (!user) {
      console.error("User not found:", userId); // Debugging line
      return res.status(404).send({ message: "User not found" });
    }

    console.log("Updated user:", user); // Debugging line
    res.send({ message: "User role updated successfully", user });
  } catch (error) {
    console.error("Error updating user role:", error); // Debugging line
    res.status(500).send({ message: "An error occurred while updating the user role" });
  }
});

module.exports = router;