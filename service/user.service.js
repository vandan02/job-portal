
const { getuserbyemail, register, getuserbyid, updateuser, getallusers, getUserByQuery } = require("../repository/user.repo");
const sendgmail = require("../utils/email");
const { hashpasswords, generatetoken, comparePasswords, decodetoken } = require("../utils/helper");
const userdetailss=require("./userDtails.service");

let map = new Map();

module.exports ={
    createuser:async(data)=>{
      
     try {
         
             let user=await getuserbyemail(data.email)
             
             if (user)  throw new Error("User already exists");   
             let hash=await hashpasswords(data.password)
             data.password = hash
             user=await register(data)
            
             
             
             let token=await generatetoken({
               email: user.email,
               id: user.id,
               role: user.role,
               name: user.name,
             })
             let otp = Math.round(Math.random() * 10000);
             map.set(token, otp);
             let url = `<div> <a href=http://localhost:8090/api/v1/users/verify/${token}/${otp} > click to verify </a> </div>`;
             await sendgmail(user.email, "verify", url);
           
          return token;
     } catch (error) {
        throw new Error(error.message)
     }
    },
    verifyemail:async(token,otp)=>{
      let userotp=map.get(token);
    try {
        if(userotp==otp){
          let user=decodetoken(token);
          user=await updateuser(user.id,{isVerified: true })
          return user;
        }
        
    } catch (error) {
      throw new Error(error.message)
    }

    },
    loginuser:async(data)=>{
      
      try {
              let user=await getuserbyemail(data.email)
              
              if (!user)  throw new Error("User not exists");   

              let ismatch=await comparePasswords(user.password,data.password)
              if(!ismatch) throw new Error("Passwords missmatch"); 
              let token=await generatetoken({
                email: user.email,
                id: user.id,
                role: user.role,
                name: user.name,
              })
              let otp = Math.round(Math.random() * 10000);
              map.set(token, otp);
              let url = `<div> <a href=http://localhost:8090/api/v1/users/verify/${token}/${otp} > click to verify </a> </div>`;
              await sendgmail(user.email, "verify", url);
           return token;
      } catch (error) {
         throw new Error(error.message)
      }
     },
     updateuser:async(id,data)=>{
      let user=await getuserbyid(id)  
      if (!user)  throw new Error("invalid id");   
      user=await updateuser(id,data)
      return user  
     },

     getallusers:async()=>{
      let user=await getallusers();
      if (!user)  throw new Error("No users found");
      return user
     },
     deleteuserbyid:async(id)=>{
      let user=await getuserbyid(id);
    
      if (!user)  throw new Error("invalid id");
      return user
     },
     getUserByQuery:async(query)=>{
      let user=await getUserByQuery(query);
      if (!user)  throw new Error("No user found");
      return user
     },
     finduserbyid:async(id)=>{
      let user=await getuserbyid(id)
      let details=await userdetailss.getuserdetail(id)
      if (!user)  throw new Error("User not found");
      return {user,details}
     }
}