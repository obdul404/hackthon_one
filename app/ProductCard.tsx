import React, { FC } from 'react';
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link';
import AddToCart from '@/components/ui/AddToCart';

const ProductCard: FC<{ item: any }> = ({ item }) => {
    return (
        <div className='flex flex-col justify-center items-center my-4 gap-2'>
            <Link href={"product/" + item.slug.current}>
                <Image src={urlForImage(item.image).url()} width={300} height={300} alt={item.title}></Image>
            </Link>
            <h1 className='mt-4'>{item.title}</h1>
            <h1>${item.price}</h1>
            <AddToCart item={item} />
        </div>
    )
}

export default ProductCard