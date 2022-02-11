import express from 'express'
import { getUsers, signin, signup } from '../controllers/authControllers.js'

const authRouter = express.Router()

authRouter.post("/signin", signin)
authRouter.post("/signup", signup)
authRouter.get("/users", getUsers)


export default authRouter