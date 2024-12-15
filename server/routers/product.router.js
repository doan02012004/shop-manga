import express from 'express'
import { createProduct, getAllProduct } from '../controllers/product.controller.js'
import checkToken from '../middlewares/checkToken.middleware.js'

const ProductRouter = express.Router()

ProductRouter.get('/',checkToken,getAllProduct)
ProductRouter.get('/:id')
ProductRouter.post('/',createProduct)
ProductRouter.put('/')

export default ProductRouter