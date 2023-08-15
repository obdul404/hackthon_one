import Image from 'next/image'
import React from 'react'
import { Badge } from './badge'
import { Button } from './button'
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';


function Hero() {
    return (
        <div className='flex justify-between gap-16 my-16'>
            <div className='flex flex-col justify-center w-1/2 gap-10'>
                <Badge className='flex justify-center items-center bg-blue-200 font-bold text-lg rounded-md w-[120px] h-[40px]'>Sale 70%</Badge>
                <h1 className='font-bold text-6xl flex'>An Industrial Take on Streetwear</h1>
                <p className='text-base'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <Link href="/products">
                    <Button className='flex justify-center items-center font-semibold gap-1 w-60'>
                        <ShoppingCart />
                        Start Shopping
                    </Button>
                </Link>
            </div>
            <div className='items-center justify-center w-1/2 hidden md:flex'>
                <div className='bg-orange-100 rounded-full'>
                    <Image className='' alt='main' src={"/header.webp"} width={650} height={650}></Image>
                </div>
            </div>
        </div>
    )
}

export default Hero