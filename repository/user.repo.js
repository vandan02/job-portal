const User = require("../model/user.model")

module.exports = {

    register:async(data)=>{
      let user=await User.create(data);
      return user;
    },
    getuserbyemail:async(email)=>{
       
        
        let user=await User.findOne({email:email});
        return user;
    },
    getuserbyid:async(id)=>{
        let user=await User.findById(id);
        return user;
    },
    updateuser:async(id,user)=>{
        let updatedUser=await User.findByIdAndUpdate(id,user,{new:true});
        return updatedUser;
    },
    deleteuserby:async(id)=>{  
        await User.findByIdAndUpdate(id,{ isActive: false },{new:true});
        return "User deleted successfully";
    },
    getallusers:async()=>{
        let users=await User.find({});
        return users;
    },
    getUserByQuery:async(query)=>{
        let users=await User.find(query);
        return users;
    },
   
}