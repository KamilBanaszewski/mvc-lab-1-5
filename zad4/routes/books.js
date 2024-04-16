const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/book/:id', booksController.getBookDetails);

module.exports = router;
