const {Router}=require('express')
const { signup, signinUser, updateuser, deleteuser,  getuserbyid, userfindwithQuery, getallusers, verifyEmail } = require('../controller/user.controller');
const Ability = require('../middleware/Ability');

const routes=Router()
routes.get("/verify/:token/:otp", verifyEmail);
routes.get('/getAll',getallusers)
routes.get('/info/:userid',getuserbyid)
routes.get('/',Ability(["ADMIN"]),userfindwithQuery)
routes.post('/signup',signup)
routes.post('/login',signinUser) 
routes.patch('/:userid',updateuser)
routes.delete('/:userid',deleteuser)


module.exports=routes