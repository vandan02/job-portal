const userdetailrepo=require('../repository/datail.repo')


module.exports = {
    getuserdetail:async(userId)=>{
    try {
            let user=await userdetailrepo.getuserbyid(userId);
            return user;
    } catch (error) {
        throw new Error(error.Message);
    }
    },
    createUserDetails:async(payload)=>{
   try {
         let user=await userdetailrepo.createdetails(payload);
         return user;
   } catch (error) {
    throw new Error(error.Message)
   }
    },
    updateUserDetails:async(userId,payload)=>{
        try {
            let user=await userdetailrepo.updatedetail(userId,payload);
            return user;
        } catch (error) {
            throw new Error(error.Message);
        }
    }
}