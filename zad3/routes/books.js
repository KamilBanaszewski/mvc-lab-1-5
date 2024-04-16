const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.post('/add', booksController.addBook);
router.delete('/delete/:id', booksController.deleteBook);

module.exports = router;
