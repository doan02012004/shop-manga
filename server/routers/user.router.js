import express from 'express'
import { register, signin } from '../controllers/user.controller.js'

const UserRouter = express.Router()

UserRouter.get('/')
UserRouter.get('/:id')
UserRouter.post('/register',register)
UserRouter.post('/login',signin)

export default UserRouter