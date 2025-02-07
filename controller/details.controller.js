const details=require('../service/userDtails.service')


module.exports = {
    createUser:async(req,res)=>{
       try {
         let user = req.user.id;
         req.body.user = user;
  let userDtails = await details.createUserDetails(request.body)   
  res.send(userDtails);
       } catch (error) {
        res.send({ error: error });
       } 
    },
    updateUser:async(req,res)=>{
        let {id} = req.params;
        try {
           
            let userDetails = await details.updateUserDetails(id, req.body)
            res.send(userDetails);
        } catch (error) {
            res.send({ error: error });
        }
    },
    getUserDetailsByUserId:async(req,res)=>{
        let {userId} = req.params;
        try {
            let userDetails = await details.getUserDetailsByUserId(userId);
            res.send(userDetails);
        } catch (error) {
            res.send({ error: error });
        }
    }
}