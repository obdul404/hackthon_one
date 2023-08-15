import Image from 'next/image'
import React from 'react'
import { Button } from './button'

function Promotions() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <h2 className='font-bold text-3xl' >Our Promotions Events</h2>
            </div>
            <div className='flex justify-between items-center flex-wrap md:flex-nowrap gap-4 py-16'>
                <div className='flex  flex-col  md:w-3/4 gap-4'>
                    <div className='flex justify-between items-center bg-slate-100 px-8'>
                        <div>
                            <h2 className='font-bold text-3xl'>GET UP TO <span className='text-4xl'>60%</span></h2>
                            <p>For the summer season</p>
                        </div>
                        <div>
                            <Image alt='event1' src={'/event1.webp'} width={260} height={200}></Image>
                        </div>
                    </div>
                    <div className='flex justify-center items-center bg-black text-white px-12 py-8'>
                        <div className='flex flex-col items-center'>
                            <h2 className='font-bold text-3xl'>GET 30% Off</h2>
                            <p>USE PROMO CODE</p>
                            <Button>DINE WEEKEND SALE</Button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='bg-orange-100 flex flex-col justify-between items-center py-5'>
                        <p>Sweatshirt</p>
                        <p><span className='line-through'>$100.00</span> <span className='font-bold'>$75.00</span></p>
                        <Image alt='event1' src={'/event2.webp'} width={260} height={260}></Image>
                    </div>
                    <div className='bg-slate-100 flex flex-col justify-between items-center py-5'>
                        <p>Push Button Bomber</p>
                        <p><span className='line-through'>$225.00</span> <span className='font-bold'>$190.00</span></p>
                        <Image alt='event1' src={'/event3.webp'} width={260} height={260}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promotions