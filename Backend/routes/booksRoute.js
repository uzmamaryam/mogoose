const express = require('express');
const router = express.Router();
const books = require('./model/books');

router.get("/", async (req, res) => {
    try {
      const booksRecord = await books.find({});
      res.json(booksRecord).status(200);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// router.get('/:id', (req, res) =>{
// const {id} = req.params
// const newbook = books.filter(item => item.id == id)
// res.json(newbook).status(200)
// })

module.exports = router
