const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log("MongoDB connected......")
});


app.listen(8080, () => {
    console.log("Server is running.....");
});