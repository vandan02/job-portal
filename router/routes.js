const {Router}=require('express')
const { signup, signinUser, updateuser, deleteuser,  getuserbyid, userfindwithQuery, getallusers } = require('../controller/user.controller')

const routes=Router()
routes.get('/getAll',getallusers)
routes.get('/:userid',getuserbyid)
routes.get('/query',userfindwithQuery)
routes.post('/signup',signup)
routes.post('/login',signinUser) 
routes.patch('/:userid',updateuser)
routes.delete('/:userid',deleteuser)


module.exports=routes