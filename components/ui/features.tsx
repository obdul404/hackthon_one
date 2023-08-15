import Image from 'next/image'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'

function Features() {
    return (
        <section>
            <div className='flex justify-center md:justify-between my-8'>
                <div className='hidden md:block w-1/2'></div>
                <div className='flex flex-col font-bold text-2xl md:text-4xl items-center justify-center md:items-start'>
                    <h1>Unique and Authentic</h1>
                    <h1>Vintage Designer Jewellery</h1>
                </div>
            </div>
            <div className='flex items-center md:justify-between flex-col md:flex-row'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2 justify-center'>
                    <div className='font-bold text-4xl md:text-8xl opacity-5 absolute -z-10 w-1/4 leading-[110px]'>Different from others</div>
                    <div className='w-3/4'>
                        <h3 className='font-bold text-xl md:text-2xl'>Using Good Quality Materials</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-3/4'>
                        <h3 className='font-bold text-xl md:text-2xl'>100% Handmade Products</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-3/4'>
                        <h3 className='font-bold text-xl md:text-2xl'>Modern Fashion Design</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='w-3/4'>
                        <h3 className='font-bold text-xl md:text-2xl'>Discount for Bulk Orders</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center md:justify-between w-full md:w-1/2 gap-10 my-8'>
                    <Image src={'/feature.webp'} alt={'feature'} width={'260'} height={'200'}></Image>
                    <div className='flex flex-col justify-center gap-10 items-center'>
                        <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Link href="/products">
                            <Button className='flex justify-center items-center font-semibold gap-1 w-60'>See All Products</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features