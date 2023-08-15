import CounterView from '@/components/Counter'
import CartCounter from '@/components/ui/CartCounter'
import FeatureProducts from '@/components/ui/featureProducts'
import Features from '@/components/ui/features'
import Hero from '@/components/ui/hero'
import NewsLetter from '@/components/ui/newsletter'
import Promotions from '@/components/ui/promotions'



export default async function Home() {
  return (
    <>
      <main className='container mx-auto'>
        <Hero />
        <Promotions />
        <Features />
        {/* @ts-expect-error Server Component */}
        <FeatureProducts />
        <NewsLetter />
      </main>
    </>
  )
}
