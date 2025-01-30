import BannerSection from "../Components/BannerSection/BannarSection"
import BannerSpecial from '../Components/BannerSpecial'
import DisBanner from '../Components/DisBanner'
import OffProducts from '../Components/OffProducts/OffProducts'
import TopCarousel from '../Components/TopCarousel/TopCarousel'
import TrandingItems from '../Components/TrandingItems/TrandingItems'
import UnderHOffer from '../Components/UnderHOffer/UnderHOffer'
import BestProducts from '../Components/BestProducts/BestProducts'

export default function Home() {
  return (
    <div className='home-page'>
      <TopCarousel />
      <BestProducts />
      <BannerSection />
      <OffProducts />
      <DisBanner />
      <UnderHOffer />
      <BannerSpecial />
      <TrandingItems />
    </div>
  )
}
