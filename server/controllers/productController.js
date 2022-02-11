const Product = require("../models/productModel");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(403).json(error);
  }
};
const getProduct = async(req, res)=>{
  const {id} = req.params
  try {
    const product = await Product.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(403).json(error);
  }
}
const createProduct = async (req, res) => {
  const body = req.body;
  try {
    const newProduct = await new Product(body);

    newProduct.save();
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(403).json(error);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const upProduct = await Product.findByIdAndUpdate(id, body, { new: true });
    await upProduct.save();

    res.status(200).json(upProduct);
  } catch (error) {
    res.status(403).json(error);
  }
};

const productDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndRemove(id);
    res.status(200).json("Eliminado correctamente");
  } catch (error) {
    res.status(403).json(error);
  }
};
module.exports = { getProducts, createProduct, updateProduct, productDelete, getProduct };
