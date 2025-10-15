/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.get("/", async (req, res) => {
    const users = await Users.find();
    res.json(users);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Users.findById(id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const user = req.body;
  if (!user.name || !user.email || !user.password || !user.created || !user.updated) {
    res
      .status(401)
      .json({ error: "name, email, password, created, updated are required" });
  }
  const dbResponse = await Users.create(user);
  res.json(dbResponse);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  const updatedUser = await Users.findByIdAndUpdate(id, user, {
    new: true,
  });
  res.json(updatedUser);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const dbResponse = await Users.findByIdAndDelete(id);
    res.json(dbResponse);
  } catch (error) {
    res.status(500).json(dbResponse);
  }
});

router.delete("/", async (req, res) => {
  try {
    const dbResponse = await Users.deleteMany({});
    res.json(dbResponse);
  } catch (error) {
    res.status(500).json(dbResponse);
  }
});

module.exports = router;