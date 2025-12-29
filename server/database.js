const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose')

const databaseconnection = async ()=>{
mongoose.connect("mongodb://localhost:27017/bookstore")
.then(()=>{
    console.log("Database connected Successfully");
})
.catch((err)=>{
    console.log('Database Connection failed',err);  
})
}

module.exports = databaseconnection;