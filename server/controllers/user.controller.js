import UserModel from "../models/user.model.js";
import { userLoginSchema, userRegisterSchema } from "../schemas/user.schema.js"
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import { generateAccessToken, generateRefreshToken } from "../utils/token.utils.js";
import { generateMaxAgeCookie } from "../utils/cookie.util.js";
dotenv.config()
const hashSalt = process.env.hashSalt
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const { error } = userRegisterSchema.validate({ username, email, password })
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const checkUser = await UserModel.findOne({ email })
        if (checkUser) {
            return res.status(400).json({
                message: 'Tài khoản đã tồn tại'
            })
        }
        const hashPassword = await bcrypt.hash(password, Number(hashSalt))
        const user = {
            username,
            email,
            password: hashPassword
        }
        const newUser = await UserModel.create(user)
        if (!newUser) {
            return res.status(400).json({
                message: 'Đăng ký thất bại'
            })
        }
        return res.status(201).json({
            message: 'Đăng ký thành công !'
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body
        const { error } = userLoginSchema.validate({ email, password })
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }
        const checkUser = await UserModel.findOne({ email })
        if (!checkUser) {
            return res.status(400).json({
                message: 'Tài khoản không tồn tại'
            })
        }
        const checkPassword = await bcrypt.compare(password, checkUser.password)
        if (!checkPassword) {
            return res.status(400).json({
                message: 'Sai mật khẩu'
            })
        }
        const accessToken = await generateAccessToken({_id:checkUser._id,username:checkUser.username})
        const refreshToken = await generateRefreshToken({_id:checkUser._id,username:checkUser.username})
        const max = generateMaxAgeCookie()
        res.cookie('accessToken',accessToken,{
            httpOnly: true,
            maxAge: max,
            path:'/'
        })
        res.cookie('refreshToken',refreshToken,{
            httpOnly: true,
            maxAge: max,
            path:'/'
        })
        return res.status(201).json({
            message: 'Đăng nhập thành công !',
            token:accessToken
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}