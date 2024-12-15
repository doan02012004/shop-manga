import mongoose from "mongoose"

const connectDb = async(url) =>{
    try {
        await mongoose.connect(url)
        console.log('Connect successfully')
    } catch (error) {
        console.log('Connect fail', error.message)
    }
}

export default connectDb