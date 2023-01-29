import express from 'express'
import { getAllUser,createUser, LoginUser } from '../controller/user-controller.js'

const user_router=express.Router()
//user-routes

user_router.get('/',getAllUser)

user_router.post('/sign-up',createUser)
user_router.post('/login',LoginUser)

export default user_router