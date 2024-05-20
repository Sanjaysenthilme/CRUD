// .env file
require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json())

const cors = require("cors");
app.use(cors({origin:"http://localhost:3000",credentials:true}));


app.post('/',(req,res)=>{
    const {name , userId , userPhone} = req.body;
    console.log(`server data ${name} ,${userId} , ${userPhone}`);
    res.send('<h1>Data successfully registeredk</h1>')
})

app.listen(PORT,()=>{
    console.log(`The server is listening on the port :${PORT}`);
})