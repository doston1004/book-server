const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", routes);

// Database connection
const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost/library");
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

db();

// Server listening
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on the port ${PORT}`));
