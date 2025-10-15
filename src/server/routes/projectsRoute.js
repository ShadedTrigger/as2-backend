/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const Projects = require("../models/Projects");

router.get("/", async (req, res) => {
    const projects = await Projects.find();
    res.json(projects);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const project = await Projects.findById(id);
  res.json(project);
});

router.post("/", async (req, res) => {
  const project = req.body;
  if (!project.title || !project.firstname || !project.lastname || !project.email || !project.completion || !project.description) {
    res
      .status(401)
      .json({ error: "title, firstname, lastname, email, completion, decription are required" });
  }
  const dbResponse = await Projects.create(project);
  res.json(dbResponse);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const project = req.body;
  const updatedProject = await Projects.findByIdAndUpdate(id, project, {
    new: true,
  });
  res.json(updatedProject);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const dbResponse = await Projects.findByIdAndDelete(id);
    res.json(dbResponse);
  } catch (error) {
    res.status(500).json(dbResponse);
  }
});

router.delete("/", async (req, res) => {
  try {
    const dbResponse = await Projects.deleteMany({});
    res.json(dbResponse);
  } catch (error) {
    res.status(500).json(dbResponse);
  }
});

module.exports = router;