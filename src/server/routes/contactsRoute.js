/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const Contacts = require("../models/Contacts");

router.get("/", async (req, res) => {
  const contacts = await Contacts.find();
  res.json(contacts);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const contact = await Contacts.findById(id);
  res.json(contact);
});

router.post("/", async (req, res) => {
  const contact = req.body;
  if (!contact.firstname || !contact.lastname || !contact.email) {
    res
      .status(401)
      .json({ error: "firstname, lastname, email are required" });
  }
  const dbResponse = await Contacts.create(contact);
  res.json(dbResponse);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const contact = req.body;
  const updatedContact = await Contacts.findByIdAndUpdate(id, contact, {
    new: true,
  });
  res.json(updatedContact);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const dbResponse = await Contacts.findByIdAndDelete(id);
    res.json(dbResponse);
  } catch (error) {
    res.status(500).json(dbResponse);
  }
});

router.delete("/", async (req, res) => {
  try {
    const dbResponse = await Contacts.deleteMany({});
    res.json(dbResponse);
  } catch (error) {
    res.status(500).json(dbResponse);
  }
});

module.exports = router;
