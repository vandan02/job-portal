const express= require('express');
const { db_connection } = require('./config/db');
require('dotenv').config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




let PORT=process.env.PORT||8080
app.listen(PORT,(req,res)=>{
    console.log(`Server is running on port ${PORT}`)
    db_connection()
})