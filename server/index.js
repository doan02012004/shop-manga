import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import connectDb from './configs/db.config.js'
import routers from './routers/index.js'
dotenv.config()
const dbUrl = process.env.DB_URL;
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cookieParser())

connectDb(dbUrl)
routers(app)
app.listen(8000, () => {
    console.log('server is running')
})