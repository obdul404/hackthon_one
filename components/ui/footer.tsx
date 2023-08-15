import Image from 'next/image'
import React from 'react'
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

function Footer() {
    return (
        <footer className='container'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-16 justify-items-center'>
                <div className='flex flex-col gap-4 md:col-span-1 col-span-2'>
                    <Image src="/Logo.webp" width={140} height={25} alt="Logo" />
                    <p>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className='flex gap-2'>
                        <Twitter className='bg-gray-200 h-10 w-10 p-2 rounded-md' />
                        <Facebook className='bg-gray-200 h-10 w-10 p-2 rounded-md' />
                        <Linkedin className='bg-gray-200 h-10 w-10 p-2 rounded-md' />
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-xl mb-4'>Company</h3>
                    <div className='flex flex-col justify-start'>
                        <Link href="#">About</Link>
                        <Link href="#">Terms of Use</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">How it Works</Link>
                        <Link href="#">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-xl mb-4'>Support</h3>
                    <div className='flex flex-col justify-start'>
                        <Link href="#">About</Link>
                        <Link href="#">Terms of Use</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">How it Works</Link>
                        <Link href="#">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-xl mb-4'>Contact</h3>
                    <div className='flex flex-col justify-start'>
                        <Link href="#">About</Link>
                        <Link href="#">Terms of Use</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">How it Works</Link>
                        <Link href="#">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer