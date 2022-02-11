const UserModel = require("../models/userModel")
const brcypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const signin =async(req,res)=>{
    const {email, password} = req.body
    try {
        const userExist = await UserModel.findOne({email})
        if(!userExist) return res.status(403).json('El usuario no existe')
        const pass = await brcypt.compare(password, userExist.password)

        if(!pass) return res.status(403).json('Credenciales invalidas')

        const token = jwt.sign({
            id: userExist._id
        }, 'test', {expiresIn: '1h'})
        console.log(token);
        res.status(200).json({result:  userExist, token})
    } catch (error) {
        res.status(403).json(error)
    }
}
const signup = async(req , res)=>{
    const {nombre, password, email} = req.body
    try {
        const userExist = await UserModel.findOne({email})

        if(userExist) return res.status(403).json('Ya existe un usuario con ese email')
        const passhashed = await brcypt.hash(password, 10)

        const result = await UserModel.create({
            nombre, 
            email, 
            password: passhashed
        })

        const token = jwt.sign({
            id: result._id
        }, 'test', {expiresIn: '1h'})

        res.status(200).json({result, token})

    } catch (error) {
    console.log(error);
    }
}


module.exports = {signin, signup}