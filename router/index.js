const {Router}=require('express')
const { signup } = require('../controller/user.controller')
const routes = require('./routes')
const details=require('./details.routes')
const company = require('./company.routes')
const index=Router()

index.use(routes)
index.use("/user-details", details);
index.use('/companies', company);


module.exports=index