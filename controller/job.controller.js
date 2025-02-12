const jobs= require("../service/jobs.service");

module.exports = {
    create:async(req, res)=>{
        req.body.userId=req.user.id;
   try {
         const job=await jobs.createjob(req.body)
         return res.status(201).json({message:"job created successfully",job})
         
   } catch (error) {
    return res.status(501).json({massage:error.message})
   }
    },
    getAllJobs:async(req, res)=>{
        try {
            let job = await jobs.alljob(req.query)
            return res.status(200).json(job)
        } catch (error) {
            return res.status(501).json({massage:error.message})
        }
    },
    getJobById:async(req, res)=>{
        try {
            let job = await this.getJobById(req.params.id)
            return res.status(200).json(job)
        } catch (error) {
            return res.status(501).json({massage:error.message})
        }
    },
    updateJob:async(req, res)=>{
        try {
            let job = await jobs.updatejob(req.params.id, req.body)
            return res.status(200).json(job)
        } catch (error) {
            return res.status(501).json({massage:error.message})
        }
    },
    deleteJob:async(req, res)=>{
        try {
            let job = await jobs.deletejob(req.params.id)
            return res.status(200).json(job)
        } catch (error) {
            return res.status(501).json({massage:error.message})
        }
    },
    getbycompanyid:async(req,res)=>{
        try {
            const job=await jobs.getallbycompanyid(req.params.companyId)
            return res.status(200).json(job)
        } catch (error) {
            return res.status(501).json({massage:error.message})
        }
    }

}