import Hero from '@/components/Hero'
import Slider from '@/components/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-body">
      <Hero />
      <Slider />
    </main>
  )
}
