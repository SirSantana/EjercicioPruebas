import express from 'express'
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from '../controllers/productsControllers.js'
import { authJwt } from '../middlewares/authJwt.js'

const productsRouter = express.Router()

productsRouter.get("/", getProducts)
productsRouter.get("/:id",getOneProduct)
productsRouter.post("/",authJwt,createProduct)
productsRouter.patch("/:id",authJwt,updateProduct)
productsRouter.delete("/:id",authJwt,deleteProduct)


export default productsRouter