const express = require('express')
const {handleBookStoreController,handleBookListController,handleDeleteController,handleUpdateBookController} = require('../Controller/book.controller')

const router = express.Router();

//http://localhost:8000/book/addbook
router.post ('/addbook',handleBookStoreController);
router.get('/booklists',handleBookListController);
router.delete('/deletebook/:id',handleDeleteController);
router.put('/updatebook',handleUpdateBookController);

module.exports = router