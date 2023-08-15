import React from 'react'
import { Image as IImage } from 'sanity'
import { client } from '@/app/lib/sanityClient'
import ProductCard from '@/app/ProductCard'

interface IProduct {
    _id: string,
    title: string,
    description: string,
    image: IImage,
    price: number
    category: {
        name: string
    }
}

async function ProductListing({ query }: { query: string }) {
    const data: IProduct[] = await client.fetch(query, { cache: 'no-store' });
    return (
        <div className='container flex flex-col md:mt-16 mb-32'>
            <div className='gap-4 grid grid-cols-[repeat(2,auto)] md:grid-cols-[repeat(4,auto)]'>
                {data.map((item) => (<div key={item._id}>
                    <ProductCard item={item}></ProductCard>
                </div>))
                }
            </div>
        </div>
    )
}

export default ProductListing