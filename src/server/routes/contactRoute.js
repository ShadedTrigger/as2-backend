const express = require("express");
const router = express.Router();
const Contacts = require("../models/Contacts");

router.get("/", async (req, res) => {
    const contacts = await Contacts.find();
    res.json(contacts);
});

module.exports = router;