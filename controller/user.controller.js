const { createuser } = require("../service/user.service")
module.exports = {
    signug:async(req,res)=>{
      try {
        const user=await createuser(req.body)
        res.status(201).json({message: "User created successfully", user })
      } catch (error) {
        return res.status(500).json({message:error.message})
      }
    },
}