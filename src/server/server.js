const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const contactsRoute = require("../server/routes/contactsRoute");
const educationsRoute = require("../server/routes/educationsRoute");
const projectsRoute = require("../server/routes/projectsRoute");
const usersRoute = require("../server/routes/usersRoute");
dotenv.config();

const app = express();
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB connected"))
    .catch((error) => console.error("Error while connecting to db - ", error));

app.message = "Welcome to the portfolio of Sean Jasmins-Nelson!";

app.get("/", (req, res) => {
    res.json({ message: app.message });
});

app.use("/contacts", contactsRoute);
app.use("/educations", educationsRoute);
app.use("/projects", projectsRoute);
app.use("/users", usersRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("API is up at " + (process.env.PORT || 3000));
});