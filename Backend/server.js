require("./config/db");
const express = require('express');
const dotenv = require('dotenv');
const bookRoutes = require('./routes/booksRoute.js');

dotenv.config();
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send(`server is running at ${PORT}`);
  });
  
app.use("/books", bookRoutes);


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`,)
})