import ProductDetails from "@/components/ui/productDetails";

export default function Page({ params, searchParams }: {
    params: { slug: string },
    searchParams: { id: string },
}) {

    return (
        <div>
            {/* @ts-expect-error Server Component */}
            <ProductDetails slug={params.slug} />
        </div>
    )
}