const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose')

const databaseconnection = async ()=>{
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database connected Successfully");
})
.catch((err)=>{
    console.log('Database Connection failed',err);  
})
}

module.exports = databaseconnection;