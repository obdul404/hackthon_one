import React from 'react'
import { Image as IImage } from 'sanity'
import { client } from '@/app/lib/sanityClient'
import ProductCard from '@/app/ProductCard'
import ProductListing from '@/components/ui/productListing'


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

async function Page() {
    const query = `*[_type=='product' && category->name == 'Kids']{_id,title,description,image,price,slug,category->{_id,name}}`
    return (
        /* @ts-expect-error Server Component */
        <ProductListing query={query} />
    )
}

export default Page