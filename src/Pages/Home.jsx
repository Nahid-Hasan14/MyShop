import BannerSection from "../Components/BannerSection/BannarSection"
import BannerSpecial from '../Components/BannerSpecial'
import DisBanner from '../Components/DisBanner'
import OffProducts from '../Components/OffProducts/OffProducts'
import TopCarousel from '../Components/TopCarousel/TopCarousel' 
import TrandingItems from '../Components/TrandingItems/TrandingItems'
import UnderHOffer from '../Components/UnderHOffer/UnderHOffer'
import BestProducts from '../Components/BestProducts/BestProducts'

import { useEffect, useState } from "react"
import axios from "axios"

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(()=>{
       const apiUrl = 'https://fakestoreapi.com/products';

       axios.get(apiUrl)
        .then(responce => {
          setData(responce.data)
          setIsLoading(false)
        })
        .catch(error => {
          setError(error)
          setIsLoading(false)
        })
  }, [])

  if(isLoading){
    return <div>Data is Loading........</div>
  }
  if(error){
    return <div>Error: {error.message}</div>
  }
  // Filter data by specific categories

  const electronics = data.filter(item=> item.category === "electronics");
  const jewelery = data.filter(item=> item.category === "jewelery");
  const menClothing = data.filter(item=> item.category === "men's clothing");
  const womenClothing = data.filter(item=> item.category === "women's clothing");
  const underOffer = data.filter(item => item.price < 100);

  return (
    <div className='home-page'>
      <TopCarousel />
      <BestProducts data={electronics}/>
      <BannerSection />
      <OffProducts menClothing= {menClothing} jewelery={jewelery} womenClothing= {womenClothing}/>
      <DisBanner />
      <UnderHOffer underOffer ={underOffer}/>
      <BannerSpecial />
      <TrandingItems data={data}/>
    </div>
  )
}
