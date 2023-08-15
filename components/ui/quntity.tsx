'use client'
import React, { useState } from 'react'
import { Button } from './button';
import { Image as IImage } from 'sanity'
import { useDispatch } from 'react-redux';
import { cartCounterActions } from '@/app/store/slice/cartCounterSlice';
import { cartSliceActions } from '@/app/store/slice/cartSlice';

interface IProduct {
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

function Quntity({ item }: { item: IProduct }) {
    let qty = 0
    if(item.quantity) {
        qty = item.quantity
    } else {
        qty = 1
    }
    const [value, setValue] = useState(qty);
    const [price, setPrice] = useState(qty * item.price);
    const dispatch = useDispatch();
    const addtoCart = (item:IProduct) => {
        dispatch(cartSliceActions.addToCart(item));
    }
    const reduceItemCount = (item:IProduct) =>{
        dispatch(cartSliceActions.reduceItemCount(item));
    }
    const IncrementCartCount = () => {
        dispatch(cartCounterActions.increment());
    }
    const DecrementCartCount = () => {
        dispatch(cartCounterActions.decrement());
    }
    const handleIncrement = () => {
        setValue(value + 1)
        setPrice((value + 1) * item.price)
        addtoCart(item);
        IncrementCartCount();
    }
    const handleDecrement = () => {
        if (value !== 1) {
            setValue(value - 1)
            setPrice((value - 1) * item.price)
            reduceItemCount(item)
            DecrementCartCount()
        }
    }
    return (
        <>
            <p>Price: ${price.toFixed(2)}</p>
            <div className='flex flex-row gap-4 items-center'>
                <h3 className='font-bold'>Quantity:</h3>
                <Button onClick={() => handleDecrement()} className='flex justify-center items-center font-bold text-xl w-8 h-8 rounded-full bg-gray-200'>-</Button>
                <div>{value}</div>
                <Button onClick={() => handleIncrement()} className='flex justify-center items-center font-bold text-xl w-8 h-8 rounded-full bg-gray-200'>+</Button>
            </div>
        </>
    )
}

export default Quntity