const { getuserbyemail } = require("../repository/user.repo")
const { hashpasswords, generatetoken } = require("../utils/helper");
module.exports ={
    createuser:async(data)=>{
        let user=await getuserbyemail(data.email)
        if (user)  throw new Error("User already exists");   
        let hash=hashpasswords(data.password)
        data.password = hash
        user=register(data)
        let token=await generatetoken({
            email: user.email,
            id: user.id,
            role: user.role,
            name: user.name,
        });
       return token;
    }
}