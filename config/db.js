const Mongoose  = require("mongoose")
require('dotenv').config()
exports.db_connection = async()=>{
       await Mongoose.connect(process.env.DB_URL)
       console.log('DB Connected')
}