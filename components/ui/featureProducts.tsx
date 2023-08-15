
import React from 'react'
import ProductListing from '@/components/ui/productListing'

async function FeatureProducts() {
    const query = `*[_type=='product' && isFeatured == true]{_id,title,description,image,price,slug,category->{_id,name}}`
    return (
        <div className='flex flex-col gap-16'>
            <div className='flex justify-center items-center my-8'>
                <h2 className='font-bold text-2xl'>Check What We Have</h2>
            </div>
           {/* @ts-expect-error Server Component */}
            <ProductListing query={query} />
        </div>
    )
}

export default FeatureProducts