import ProductRouter from "./product.router.js"
import UserRouter from "./user.router.js"


const routers = (app) =>{
    app.use('/api/v1/products',ProductRouter)
    app.use('/api/v1/users',UserRouter)
}

export default routers