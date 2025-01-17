import React from 'react'
import {useDate} from '../Utils/useDate'
import { useState } from 'react'
import { useEffect } from 'react'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'

const WeatherCard = ({
  temperature, 
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const {time} = useDate()

  const getWindDirection = (deg) => {
    if (deg > 337.5) {
      return 'N'
    }
    if (deg > 292.5) {
      return 'NW'
    }
    if (deg > 247.5) {
      return 'W'
    }
    if (deg > 202.5) {
      return 'SW'
    }
    if (deg > 157.5) {
      return 'S'
    }
    if (deg > 122.5) {
      return 'SE'
    }
    if (deg > 67.5) {
      return 'E'
    }
    if (deg > 22.5) {
      return 'NE'
    }
    return 'N'
  }

  useEffect(() => {
    if (iconString){
      if(iconString.toLowerCase().includes('cloud')){
        setIcon(cloud)
      }
      else if(iconString.toLowerCase().includes('rain')){
        setIcon(rain)
      }
      else if(iconString.toLowerCase().includes('clear')){
        setIcon(sun)
      }
      else if(iconString.toLowerCase().includes('thunder')){
        setIcon(storm)
      }
      else if(iconString.toLowerCase().includes('fog')){
        setIcon(fog)
      }
      else if(iconString.toLowerCase().includes('snow')){
        setIcon(snow)
      }
      else if(iconString.toLowerCase().includes('wind')){
        setIcon(wind)
      }
    }
  }, [iconString])
  return (
    <div className='w=[22rem] min-w-[22-rem] h-[30rem] glassCard p-4' >
      <div className='flex w-full justify-center items-center gap-4 mt-4 mb-4'>
        <img src={icon} alt="weather_icon" />
        <p className='font-bold text-5xl flex justify-center items-center'>{temperature} &deg;C</p>
      </div>
      <div className='font-bold text-center text-xl '>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-400 shadow rounded-lg'>Wind Speed <p className='font-normal'>{windspeed} km/hr</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-blue-400'>Humidity <p className='font-normal'>{humidity} gm/m&#179;</p></p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>{
          heatIndex? heatIndex: 'N/A'
        }
      
        </p>
      </div>
      <hr className='bg-slate-600'/>
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        <span className='w-full text-center'>{conditions}</span>
      </div>

      
    </div>
  )
}

export default WeatherCard