const express = require('express')
const {handleBookStoreController,handleBookListController,handleDeleteController,handleUpdateBookController} = require('../Controller/book.controller')

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ success: true, message: "API working" });
});

//http://localhost:8000/book/addbook
router.post ('/addbook',handleBookStoreController);
router.get('/booklists',handleBookListController);
router.delete('/deletebook/:id',handleDeleteController);
router.put('/updatebook',handleUpdateBookController);

module.exports = router