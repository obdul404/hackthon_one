import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Success = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 mt-32 mb-48'>
            <p className='icon'>
                <ShoppingBag size={80} />
            </p>
            <h1>Thank you for your order!</h1>
            <p>Check your email inbox for the receipt</p>
            <Link href="/">
                <Button className='w-30'>
                    Continue Shopping
                </Button>
            </Link>
        </div>
    )
}

export default Success