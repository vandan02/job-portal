const {Router}=require('express');
const jobs=require('../controller/job.controller');

const routes=Router()

routes.post('/',jobs.create)
routes.delete('/:id',jobs.deleteJob)
routes.get('/',jobs.getAllJobs)
routes.get('/jobid:id',jobs.getJobById)
routes.get('/companyId:id',jobs.getbycompanyid)
routes.patch('/:id',jobs.updateJob)

module.exports=routes;