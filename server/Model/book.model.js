const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    BookName:{
        type:String,
        require:true
    },
    BookTitle:{
        type:String,
        require:true
    },
    BookAuthor:{
        type:String,
        require:true
    },
    SellingPrice:{
        type:Number,
        require:true
    },
    PublishDate:{
        type:Number,
        require:true
    }

},{timestamps:true});

const Book = mongoose.model("books",bookSchema)

module.exports = {Book};

