const {Router}=require('express')
const routes = require('./routes')
const details=require('./details.routes')
const company = require('./company.routes')
const index=Router()

index.use("/users",routes)
index.use("/user-details", details);
index.use('/companies', company);


module.exports=index