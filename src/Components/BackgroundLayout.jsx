import React from 'react'
import { useStateContext } from '../Context'
import { useState } from 'react'
import { useEffect } from 'react'

//images
import Clear from '../assets/images/clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/sunny.png'


const BackgroundLayout = () => {

  const { weather } = useStateContext()
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if(weather.conditions){
      let imageString = weather.conditions
      if(imageString.toLowerCase().includes('clear')){
        setImage(Clear)
      }
      else if(imageString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }
      else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setImage(Rainy)
      }
      else if(imageString.toLowerCase().includes('snow')){
        setImage(Snow)
      }
      else if(imageString.toLowerCase().includes('fog')){
        setImage(Fog)
      }
      else if(imageString.toLowerCase().includes('storm') || imageString.toLowerCase().includes('thunder')){
        setImage(Stormy)
      }
      else if(imageString.toLowerCase().includes('sun')){
        setImage(Sunny)
      }
    }


  }, [weather])

  console.log(weather)
  return (
    <img src={image} alt="weather-image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout