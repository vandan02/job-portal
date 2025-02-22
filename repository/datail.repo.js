const UserDetails = require("../model/user-detail")


module.exports = {
    getuserbyid:async(userId)=>{
       let user=await UserDetails.findOne({user:userId})
   return user;
    },
    createdetails:async(payload)=>{
    let details=await UserDetails.create(payload);
    return details;
    },
    updatedetail:async(id,payload)=>{
        let updatedDetails=await UserDetails.findByIdAndUpdate(id,payload,{new:true});
        return updatedDetails;
    }
}