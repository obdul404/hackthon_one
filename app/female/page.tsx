import React from 'react'
import ProductListing from '@/components/ui/productListing'

async function Page() {
    const query = `*[_type=='product' && category->name == 'Female']{_id,title,description,image,price,slug,category->{_id,name}}`
        return (
            /* @ts-expect-error Server Component */
            <ProductListing query={query} />
        )
}

export default Page