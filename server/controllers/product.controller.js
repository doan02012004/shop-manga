import ProductModel from "../models/product.model.js";
import { productCreateSchema } from "../schemas/product.schema.js"

export const createProduct = async(req,res) =>{
    try {
        const {name,image,price,description,quantity} = req.body
        const {error} = productCreateSchema.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const product = await ProductModel.create(req.body)
        if(!product){
            return res.status(400).json({
                message: 'Thêm sản phẩm thất bại '
            });
        }
        return res.status(201).json({
         message:'Thêm sản phẩm thành công',
         data:product   
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getAllProduct = async(req,res) =>{
    try {
        const products = await ProductModel.find()
        return res.status(200).json({
            message:"ok",
            data:products
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}