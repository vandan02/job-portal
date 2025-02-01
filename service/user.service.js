
const { getuserbyemail, register, getuserbyid, updateuser, getallusers, getUserByQuery } = require("../repository/user.repo")
const { hashpasswords, generatetoken, comparePasswords } = require("../utils/helper");
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
           
           
          return token;
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
   //   getuserbyid:async(id)=>{
   //    let user=await getuserbyid(id)  
   //    if (!user)  throw new Error("invalid id");   
   //    return user  
   //   },
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
      if (!user)  throw new Error("User not found");
      return user
     }
}