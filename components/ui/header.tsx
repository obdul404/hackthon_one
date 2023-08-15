'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MainNav } from './main-nav';
import { Input } from './input';
import { ShoppingCart } from 'lucide-react';
import CartCounter from './CartCounter';
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/store/store";


const Header: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const count = useSelector(
        (state: RootState) => state.cartSlice.count
    )

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="text-gray-900">
            <div className='container flex flex-col flex-wrap py-6 mx-auto items-center justify-between md:flex-row gap-8'>
                <div className=''>
                    <Link href="/">
                        <Image
                            src="/Logo.webp"
                            width={140}
                            height={25}
                            alt="Picture of the author"
                        />
                    </Link>
                </div>
                <div className=''>
                    <nav className="space-x-6">
                        <Link
                            href="/female"
                            className=""
                        >
                            Female
                        </Link>
                        <Link
                            href="/male"
                            className=""
                        >
                            Male
                        </Link>
                        <Link
                            href="/kids"
                            className=""
                        >
                            Kids
                        </Link>
                        <Link
                            href="/products"
                            className=""
                        >
                            All
                        </Link>
                    </nav>
                </div>
                <div className=''>
                    <Input type="text" placeholder="search" />
                </div>
                <div className='flex flex-row gap-4 justify-center items-center'>
                    <div className=''>
                    <SignedIn>
                        {/* Mount the UserButton component */}
                        <UserButton afterSignOutUrl="/"/>
                    </SignedIn>
                    <SignedOut>
                        {/* Signed out users get sign in button */}
                    <SignInButton />
                    </SignedOut>
                    </div>
                    <Link href={"/cart"}>
                        <div className='flex flex-col items-center bg-gray-200 rounded-full w-8 h-8 justify-center items-center'>
                            <div className='flex flex-row text-sm rounded-full bg-red-400 justify-center items-center w-2 h-2'>{count}</div>
                            <ShoppingCart/>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
