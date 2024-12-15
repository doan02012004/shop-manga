import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{type:String,require:true},
    image:{type:String,require:true},
    price:{type:Number,require:true},
    quantity:{type:Number,require:true},
    description:{type:String}
},{
    timestamps:true, versionKey:false
}) 

const ProductModel = mongoose.model('products',productSchema)

export default ProductModel