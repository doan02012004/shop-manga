import dotenv from 'dotenv'
import ms from 'ms'
dotenv.config()
const timeRefreshToken =  process.env.TIME_REFRESH_TOKEN;
export const generateMaxAgeCookie = () =>{
    const maxAge = timeRefreshToken?? '1d'
    return ms(maxAge)
}