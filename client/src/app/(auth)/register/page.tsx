import Link from 'next/link'
import React from 'react'
import FormRegister from '../_components/FormRegister'

function RegisterPage() {
    return (
        <div className='px-8 py-5 bg-white rounded-lg min-w-96'>
            <h2 className='text-black text-xl font-bold mb-4 text-center'>Đăng ký</h2>
            <FormRegister />
            <div className='flex justify-between items-center mt-4 *:text-blue-600 *:underline'>
                <Link href={'/login'} className='block w-max hover:text-red-600'>Đăng nhập</Link>
                <Link href={'#'} className='block w-max hover:text-red-600'>Quên mật khẩu</Link>
            </div>
        </div>
    )
}

export default RegisterPage