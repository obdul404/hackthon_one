import React from 'react'
import { Button } from './button'
import { Input } from './input'

function NewsLetter() {
    return (
        <div className='flex flex-col justify-center items-center my-16 gap-4'>
            <span className='absolute font-bold text-4xl md:text-8xl flex justify-center items-center opacity-5 -z-10'>NewsLetter</span>
            <h3 className='font-bold text-3xl'>Subscribe Our Newsletter</h3>
            <p>Get the latest information and promo offers directly</p>
            <div className='flex gap-1'>
                <Input placeholder='Input an email address'></Input>
                <Button className='w-1/2'>Get Started</Button>
            </div>
        </div>
    )
}

export default NewsLetter