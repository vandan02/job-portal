const Job = require("../model/jobs")


module.exports ={
    createjob:async(payload)=>{
     try {
           let job=await Job.create(payload)
           return job
     } catch (error) {
        throw new Error(error)
     }
    },
     updatejob:async(id,payload)=>{
      try {
          let findid=await Job.findOne(id)
          if(!findid){
              throw new Error("Invalid id")
          }
          let job=await Job.findOneAndUpdate(id,payload,{new:true})
          return job
      } catch (error) {
        throw new Error(error)
      }

     },
     deletejob:async(id)=>{
      try {
          let data=await Job.findByIdAndDelete(id)
          return data
      } catch (error) {
        throw new Error(error)
      }
     },
     alljob:async(query)=>{
try {
    let jobs=await Job.find(query);
} catch (error) {
    throw new Error(error)
}
     },
     findbyjobbyid:async(id)=>{
         try {
             let job=await Job.findById(id);
             return job
         } catch (error) {
             throw new Error(error)
         }
     },
     getallbycompanyid:async(companyId)=>{
         try {
             let jobs=await Job.find({companyId:companyId});
             return jobs
         } catch (error) {
             throw new Error(error)
         }
     }

    }