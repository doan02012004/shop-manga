'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema } from '@/schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import z from 'zod'

const FormLogin = () => {
    const form = useForm({
        resolver:zodResolver(loginSchema),
        defaultValues:{
            email:'',
            password:''
        }
    })

    const onSubmit = (value:z.infer<typeof loginSchema>) =>{
        console.log(value)
    }
  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
        control={form.control}
        name='email'
        render={({field})=>(
            <FormItem >
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder='Nhập email...' {...field} type='email' />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        >

        </FormField>
        <FormField
        control={form.control}
        name='password'
        render={({field})=>(
            <FormItem >
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input placeholder='Nhập password...' {...field} type='text' />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
        >

        </FormField>
        <Button type="submit" className='w-full'>Đăng nhập</Button>
        </form>

    </Form>
  )
}

export default FormLogin