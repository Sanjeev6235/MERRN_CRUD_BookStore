const { Book } = require("../Model/book.model");


const handleBookStoreController = async (req, res) => {
  try {
    const body = req.body;
    if (
      !body.BookName ||
      !body.BookTitle ||
      !body.BookAuthor ||
      !body.SellingPrice ||
      !body.PublishDate
    ) {
      return res
        .status(400)
        .json({ Message: "All filed are required", Success: false });
    }
    const bookAdd = await Book.insertOne(body);
    if (bookAdd) {
      res.status(201).json({
        Message: "Book added successfully",
        Success: true,
        Details: bookAdd,
      });
    }
  } catch (error) {
    res.status(400).json({ Message: error, Success: false });
  }
};


const handleBookListController = async (req, res) => {
  try {
    const booklist = await Book.find({});
    return res
      .status(200)
      .json({
        Message: "All books fetched successfully",
        Success: true,
        TotalCount: booklist.length,
        BookList: booklist,
      });
  } catch (error) {
    res
      .status(400)
      .json({ Message: error.Message, Success: false });
  }
};

const handleDeleteController = async (req,res)=>{
  try {
    const body = req.body;
    const bookDeleted = await Book.deleteOne({_id:body.Id});
    if(bookDeleted.acknowledged){
      res.status(200).json({Message:"Book Deleted successfully",Success:true})
    }
  } catch (error) {
      res
      .status(400)
      .json({ Message: error.Message, Success: false });
  }
}

const handleUpdateBookController = async (req,res)=>{
  try {
    const data = req.body;
    const bookUpdated = await Book.updateOne({_id:data?.Id},{$set:data})
    if(bookUpdated.acknowledged){
      res.status(200).json({Message:"Book updated successfully",Success:true ,Details:bookUpdated})
    }
  } catch (error) {
    res.status(400).json({ Message: error.Message, Success: false }); 
  }
}

module.exports = { handleBookStoreController ,handleBookListController, handleDeleteController,handleUpdateBookController };
