import React from 'react'
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_png.png'

const Hero = () => {
  return (
    <div className='bg-gradient-to-t from-transparent to-purple-200'>
      <div className='container mx-auto flex px-20 py-12 md:px-10'>
        <div className="flex flex-1 flex-col justify-center gap-5 ">
          <h2 className='text-black text-2xl font-semibold md:text-2xl'>NEW ARRIVALS ONLY</h2>
          <div>
            <div className='flex gap-5 items-center'>
              <p className='text-black text-7xl font-bold md:leading-tight md:font-semibold md:text-5xl'>new</p>
              <img className='h-20 md:h-13'  src={hand_icon} alt="" />
            </div>
            <p className='text-black text-7xl font-bold md:leading-tight md:font-semibold md:text-5xl'>collections</p>
            <p className='text-black text-7xl font-bold md:leading-tight md:font-semibold md:text-5xl'>for everyone</p>
          </div>
          <div className='md:mt-5'>
            <button className='md:px-4 md:py-3 md:text-sm md:font-medium flex items-center bg-red-500 text-white text-xl font-semibold gap-5 px-7 py-4 rounded-full'>
              Latest Collection
              <img src={arrow_icon} alt="" />
            </button>
          </div>
        </div>
        <div className='flex flex-1 justify-end items-center md:justify-end'>
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
