const express = require('express')
const { signin, signup } = require('../controllers/userController')


const userRoute = express.Router()


userRoute.post("/signin", signin)
userRoute.post("/signup", signup)


module.exports = userRoute