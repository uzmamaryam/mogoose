const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

mongoose.connect(process.env.mongodb_url, {
    useNewUrlParser: true,
}, (err) => {
    if (err) {
        console.log("Error connecting to DB");
    } else {
        console.log("Connected to DB");
    }
});