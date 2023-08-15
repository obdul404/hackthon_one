"use client"
import { RootState } from "@/app/store/store";
import { useSelector, useDispatch } from "react-redux";
import { Button } from '@/components/ui/button'
import Quntity from '@/components/ui/quntity'
import { urlForImage } from '@/sanity/lib/image'
import { ShoppingBag, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Image as IImage } from 'sanity'
import { cartSliceActions } from "../store/slice/cartSlice";
import { cartCounterActions } from "../store/slice/cartCounterSlice";
import getStipePromise from "@/app/lib/stripe";
import Link from "next/link";


interface ICartItem {
    _id: string,
    title: string,
    description: string,
    image: IImage,
    price: number,
    quantity: number,
    slug: {
        current: "string"
    },
    category: {
        name: string
    }
}

function Page() {
    const cartCounterValue = useSelector(
        (state: RootState) => state.cartCounterSlice.value
    )

    const productsInCart = useSelector(
        (state: RootState) => state.cartSlice.items
    )

    const subtotal = useSelector(
        (state: RootState) => state.cartSlice.subtotal
    )

    const count = useSelector(
        (state: RootState) => state.cartSlice.count
    )

    const dispatch = useDispatch();
    const removeFromCart = (cartItem: ICartItem) => {
        dispatch(cartSliceActions.removeFromCart(cartItem._id));
        dispatch(cartCounterActions.decrement());
    }

    const handleCheckout = async () => {
        const stripe = await getStipePromise();
        const response = await fetch("/api/stripe-session/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          cache: "no-cache",
          body: JSON.stringify(productsInCart),
        });
    
        const data = await response.json();
        if (data.session) {
          stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
      };

    if(productsInCart.length) {
        return (
            <section className='container my-16 md:my-32 gap-16 flex flex-col md:flex-row'>
                <div className='flex flex-col gap-8 md:w-3/4'>
                    {productsInCart?.map((item) => {
                        return (
                            <div key={item._id} className='flex flex-col md:flex-row md:items-center gap-2 p-4 bg-gray-50'>
                                <div className='md:w-1/4'>
                                    <Image src={urlForImage(item.image).url()} width={100} height={100} alt={item.title}></Image>
                                </div>
                                <div className='md:w-2/4 flex flex-col gap-2'>
                                    <div className='flex justify-between gap-2'>
                                        <h2>{item.title}</h2>
                                        <button onClick={(e) => removeFromCart(item)}><Trash2/></button>
                                    </div>
                                    {/* <p>{item.category.name}</p>
                                    <p>Delivery Estimation</p>
                                    <p>5 Working Days</p> */}
                                    <div className='flex flex-col md:flex-row justify-between'>
                                        <Quntity item={item}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col md:w-1/4 bg-gray-50 p-4 gap-4'>
                    <h2 className="text-lg font-bold">Order Summary</h2>
                    <div className="flex flex-row gap-16">
                        <p>Quantity</p><p>{count}</p>
                    </div>
                    <div className="flex flex-row gap-16">
                        <p>Sub Total</p><p>${subtotal.toFixed(2)}</p>
                    </div>
                    <Button onClick={handleCheckout}>Proceed to Checkout</Button>
                </div>
            </section>
        )
    } else {
        return (
            <div className='flex flex-col justify-center items-center gap-4 mt-32 mb-48'>
            <p className='icon'>
                <ShoppingBag size={80} />
            </p>
            <h1>Your Cart is empty</h1>
            <p>Please add some products to checkout</p>
            <Link href="/">
                <Button className=''>
                    Continue Shopping
                </Button>
            </Link>
        </div>
        );
    }
}

export default Page