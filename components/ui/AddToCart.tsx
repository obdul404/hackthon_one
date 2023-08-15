"use client"
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react";
import React, { FC, useState } from 'react';
import { Image as IImage } from 'sanity'
import { useDispatch } from 'react-redux';
import { cartCounterActions } from '@/app/store/slice/cartCounterSlice';
import { cartSliceActions } from '@/app/store/slice/cartSlice';

interface IProduct {
    _id: string,
    title: string,
    description: string,
    image: IImage,
    price: number
    quantity: number,
    slug: {
        current: "string"
    }
    category: {
        name: string
    }
}

function AddToCart({ item }: { item: IProduct }) {
    const { toast } = useToast();
    const [isLoading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const updateCartCount = () => {
        dispatch(cartCounterActions.increment());
    }

    const addtoCart = (item:IProduct) => {
        dispatch(cartSliceActions.addToCart(item));
    }

    const handleAddToCart = () => {
        // setLoading(true);
        // const res = await fetch("/api/cart", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         product_id: item._id
        //     })
        // })

        // if (!res.ok) {
        //     setLoading(false);
        //     toast({
        //         variant: "destructive",
        //         title: "Uh oh! Something went wrong.",
        //         description: "There was a problem with your request.",
        //     })
        // } else {
        //     setLoading(false);
        //     updateCartCount();
        //     addtoCart(item);
        //     toast({
        //         description: item.title + " is added to cart",
        //     })
        // }

        // const result = res.json()
        updateCartCount();
        addtoCart(item);
        toast({
            description: item.title + " is added to cart",
        })
    }
    return (
        <Button onClick={() => handleAddToCart()} className='rounded-md border'>
            {
                isLoading ? <span className='flex flex-row gap-2 justify-center items-center'><Loader2 className="mr-2 h-4 w-4 animate-spin" />Adding</span> : "Add to Cart"
            }
        </Button>
    )
}

export default AddToCart