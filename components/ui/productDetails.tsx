import React from 'react'
import Image from 'next/image'
import { client } from '@/app/lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '@/sanity/lib/image'
import { Button } from './button'
import Quntity from './quntity'
import AddToCart from './AddToCart'

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

async function ProductDetails({ slug }: { slug: string }) {
    const data: IProduct[] = await client.fetch(`*[_type=='product' && slug.current == "${slug}"]{_id,title,description,image,price,slug,category->{_id,name}}`, { cache: 'no-store' });
    const product: IProduct = data?.[0];
    return (
        <section className='container my-16'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='hidden w-1/6 md:flex flex-col gap-4'>
                    <Image alt={"thumbnail"} src={urlForImage(product?.image).url()} width={100} height={100}></Image>
                </div>
                <div className='w-full md:w-3/6'>
                    <Image alt={"thumbnail"} src={urlForImage(product?.image).url()} width={400} height={400}></Image>
                </div>
                <div className='md:hidden w-full flex flex-row gap-4'>
                    <Image alt={"thumbnail"} src={urlForImage(product?.image).url()} width={100} height={100}></Image>
                </div>
                <div className='w-full md:w-2/6 flex flex-col gap-10 my-16'>
                    <h3 className='font-semibold text-3xl'>{product?.title}</h3>
                    <h4 className='font-semibold text-xl text-gray-400'>{product.category.name}</h4>
                    <div>
                        <h5 className='font-bold text-sm'>SELECT SIZE</h5>
                        <div className='flex flex-row gap-4 my-4'>
                            <div className='hover:bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center'>XS</div>
                            <div className='hover:bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center'>S</div>
                            <div className='hover:bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center'>L</div>
                            <div className='hover:bg-gray-200 rounded-full h-10 w-10 flex justify-center items-center'>XL</div>
                        </div>
                    </div>
                    <Quntity item={product}/>
                    <div className='flex flex-row items-center gap-4'>
                        <AddToCart item={product} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails