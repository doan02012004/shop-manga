import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    role:{type:String,enum:['user','admin'],default:'user'},
    active:{type:Boolean,default:true}
},{
    timestamps:true, versionKey:false
}) 

const UserModel = mongoose.model('users',userSchema)

export default UserModel