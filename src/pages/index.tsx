import Footer from '@/components/Footer/footer'
import Navbar from '@/components/Navbar/navbar'
import About from './about/about'
import Features from './features/features'
import How from './how_works/how_works'





export default function Home() {
  return (
    <div>
      <Navbar />
        <About />
        <Footer />
    </div>
  )
}