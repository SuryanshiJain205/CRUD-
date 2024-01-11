const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');

router.get('/books',bookController.getAllBooks);
router.get('/get/books/:id', bookController.getBookById);
router.post('/post/books', bookController.createBook);
router.put('/put/books/:id' , bookController.updateBook);
router.delete('/delete/books/:id' , bookController.deleteBook);

module.exports = router;