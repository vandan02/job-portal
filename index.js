const express= require('express');
const { db_connection } = require('./config/db');
const index = require('./router');
require('dotenv').config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/v1",index)

let PORT=process.env.PORT||8080
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)
    db_connection()
})