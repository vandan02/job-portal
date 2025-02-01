const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
require('dotenv').config();
 const generatetoken=async(data)=>{
     console.log(data);
     
  try {
      const token= await jwt.sign(data,process.env.secret_key)
      return token
  } catch (error) {
       throw new Error('Token Generation Failed')
  }

  }
  const hashpasswords=async(password)=>{
  
    
    try {
        const hash=await bcrypt.hash(password,10)
        return hash
    } catch (error) {
        throw new Error('Password Hashing Failed')
    }
  }
  const comparePasswords=async(hashedPassword,password)=> {
    try {
        const match=await bcrypt.compare(password,hashedPassword)
        return match
    } catch (error) {
        throw new Error('Password Comparison Failed')
    }
  }
  module.exports = {
    generatetoken,
    hashpasswords,
    comparePasswords
  }
