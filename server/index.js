const express = require('express');
const databaseconnection = require('./database')
const bookRouter = require('./Routes/book.route')
const cors = require('cors');

databaseconnection();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send('Hello');

})

app.use('/book',bookRouter)

app.listen(8000, ()=>{
    console.log('Port Listening on 8000');

} )