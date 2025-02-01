
const { createuser, loginuser, updateuser, deleteuserbyid,  getallusers, getUserByQuery, finduserbyid } = require("../service/user.service")
module.exports = {
    signup:async(req,res)=>{
      try {
        const user=await createuser(req.body)
        res.status(201).json({message: "User created successfully", user })
      } catch (error) {
        return res.status(500).json({message:error.message})
      }
    },
    signinUser:async(req,res)=>{
      try {
          const token=await loginuser(req.body)
          return res.send({ token: token });
      } catch (error) {
        return res.status(500).json({message:error.message})
      }
    },
    updateuser:async(req,res)=>{
      let {userid}=req.params
      let user = await updateuser(userid, req.body);
      return res.send(user);
    },
    deleteuser:async(req,res)=>{
      let {userid}=req.params
   try {
       let user=await deleteuserbyid(userid)
       return res.send("delete user");
   } catch (error) {
    res.status(500).json({message:error.message});
   }
    },
    getuserbyid:async(req,res)=>{
      try {
        let {userid}=req.params
        let user=await finduserbyid(userid)
        return res.send(user);
      } catch (error) {
        res.send(error.message);
      }
     
    },
    getallusers:async(req,res)=>{
      try {
        let users=await getallusers()
        return res.send(users);
      } catch (error) {
        res.send(error.message);
      }
    },
    userfindwithQuery:async(req,res)=>{
      try {
        let users = await getUserByQuery(req.query);
        return res.send(users);
      } catch (error) {
        res.send(error.message);
      }
    }
      
    
}