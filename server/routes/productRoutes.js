const express = require('express')
const { getProducts, createProduct, updateProduct, productDelete, getProduct } = require('../controllers/productController')
const auth = require('../middlewares/auth')


const productRouter = express.Router()


productRouter.get("/", getProducts)
productRouter.get("/:id", getProduct)
productRouter.post("/", auth,createProduct)
productRouter.patch("/:id",auth, updateProduct)
productRouter.delete("/:id", auth,productDelete)


module.exports =  productRouter