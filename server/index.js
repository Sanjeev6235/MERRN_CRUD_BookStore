const express = require('express');
const databaseconnection = require('./database')
const bookRouter = require('./Routes/book.route')
const cors = require('cors');

databaseconnection();

const app = express();
app.use(express.json());
app.use(cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://merrn-crud-book-store-3vir.vercel.app" // vercel frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));

app.get("/", (req,res) => {
    res.send('Hello');

})

app.use('/book',bookRouter)

// app.listen(8000, ()=>{
//     console.log('Port Listening on 8000');
// } )

module.exports = app;