import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
const secretKey = process.env.SCREKEY_TOKEN;
const timeAccessToken =  process.env.TIME_ACCESS_TOKEN;
const timeRefreshToken =  process.env.TIME_REFRESH_TOKEN;
export const generateAccessToken = async(data) =>{
    const token = await jwt.sign(data, secretKey, {expiresIn: timeAccessToken });
    return token
}
export const vetifyToken = async (token) =>{
    try {
        const decoded = await jwt.verify(token, secretKey);
        return decoded;
      } catch (error) {
        console.error('Invalid Token:', error.message);
        return null
      }
}
export const generateRefreshToken = async(data) =>{
    const token = await jwt.sign(data, secretKey, {expiresIn: timeRefreshToken });
    return token
}

