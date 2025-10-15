/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const Educations = require("../models/Educations");

router.get("/", async (req, res) => {
    const educations = await Educations.find();
    res.json(educations);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const education = await Educations.findById(id);
  res.json(education);
});

router.post("/", async (req, res) => {
  const education = req.body;
  if (!education.title || !education.firstname || !education.lastname || !education.email || !education.completion || !education.description) {
    res
      .status(401)
      .json({ error: "title, firstname, lastname, email, completion, decription are required" });
  }
  const dbResponse = await Educations.create(education);
  res.json(dbResponse);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const education = req.body;
  const updatedEducation = await Educations.findByIdAndUpdate(id, education, {
    new: true,
  });
  res.json(updatedEducation);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const dbResponse = await Educations.findByIdAndDelete(id);
    res.json(dbResponse);
  } catch (error) {
    res.status(500).json(dbResponse);
  }
});

router.delete("/", async (req, res) => {
  try {
    const dbResponse = await Educations.deleteMany({});
    res.json(dbResponse);
  } catch (error) {
    res.status(500).json(dbResponse);
  }
});

module.exports = router;