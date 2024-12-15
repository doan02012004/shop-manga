import { vetifyToken } from "../utils/token.utils.js";

const checkToken = async(req,res,next) =>{
    try {
        const Authorization = req.headers?.authorization
        const token = Authorization? Authorization.split(' ')[1]: '';
        const decoded = await vetifyToken(token)
        if(!decoded){
            return res.status(401).json({"error": true, "message": 'Unauthorized access.'});
        }
        req.decoded = decoded
        next()
    } catch (error) {
        return res.status(403).send({
            "error": true,
            "message": 'No token provided.'
        });
    }
}

export default checkToken