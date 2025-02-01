const {Router}=require('express')
const { signup } = require('../controller/user.controller')
const routes = require('./routes')

const index=Router()

index.use(routes)



module.exports=index