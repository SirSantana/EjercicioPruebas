const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    nombre: String,
    carros: String,
    precio: Number,
    marca: String,
    referencia: String,
    creador: String,
    date:{
        type: Date,
        default:Date.now
    },
    precio: Number,
    cantidad: {
        type: Number, 
        default: 1
    },
    comentarios:{
        type: String,
        default: []
    }
},
{
    versionKey: false
})

const Product = mongoose.model('ProductoModel', ProductSchema)

module.exports = Product