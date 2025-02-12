const {Router}=require('express')
const routes = require('./routes')
const details=require('./details.routes')
const company = require('./company.routes')
const jobs=require('./jobs.routes')
const index=Router()

index.use("/users",routes)
index.use("/user-details", details);
index.use('/companies', company);
index.use('/jobs',jobs)


module.exports=index