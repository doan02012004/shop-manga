
import React from 'react'
import FormLogin from '../_components/FormLogin'
import Link from 'next/link'

const LoginPage = () => {
    return (
        <div className='px-8 py-5 bg-white rounded-lg min-w-96'>
            <h2 className='text-black text-xl font-bold mb-4 text-center'>Đăng nhập</h2>
           <FormLogin />
           <div className='flex justify-between items-center mt-4 *:text-blue-600 *:underline'>
            <Link href={'/register'} className='block w-max hover:text-red-600'>Đăng ký</Link>
            <Link href={'#'} className='block w-max hover:text-red-600'>Quên mật khẩu</Link>
           </div>
        </div>
    )
}

export default LoginPage