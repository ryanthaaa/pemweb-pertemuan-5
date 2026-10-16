const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book.controller');

router.get('/', bookController.getHome);
router.get('/about', bookController.getAbout);
router.get('/catalog', bookController.getCatalog);
router.get('/add', bookController.getAddForm);

router.post('/add', bookController.pageAddBook);

module.exports = router;