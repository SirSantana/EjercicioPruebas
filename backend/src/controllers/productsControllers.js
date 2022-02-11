import ProductModel from "../models/productModel.js"

export const getProducts=async(req, res)=>{

    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const createProduct = async(req, res)=>{
    const body = req.body
    const newProduct = new ProductModel(body)
    try {
        await newProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(404).json(error)
    }
}
export const getOneProduct = async(req, res)=>{
    const {id} = req.params
    try {
        const product = await ProductModel.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json(error)
        
    }
}
export const updateProduct =async (req, res)=>{
    const {id} = req.params
    const body = req.body

    try {
        const upProduct = await ProductModel.findByIdAndUpdate(id, body, {new: true})
        res.status(201).json(upProduct)
    } catch (error) {
        res.status(404).json(error)
    }
}
export const deleteProduct = async(req, res)=>{
    const {id} =req.params
    try {
        await ProductModel.findByIdAndRemove(id)
        res.status(200).json()
    } catch (error) {
        res.status(404).json(error)
    }
}
