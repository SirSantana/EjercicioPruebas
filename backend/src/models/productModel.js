import mongoose from 'mongoose'


const ProductSchema = mongoose.Schema({
    nombre: String, 
    category: String,
    price: String,
    imgUrl : String
},{
    timestamps:true,
    versionKey: false
})

const ProductModel = mongoose.model('ProductModel', ProductSchema)

export default ProductModel