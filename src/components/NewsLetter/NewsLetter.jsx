import React from 'react'

const NewsLetter = () => {
  return (
    <div className='md:container md:mx-auto md:px-20 pt-12 xs:p-0 xs:mx-0'>
      <div className='xs:py-14 xs:px-3 xs:text-center  md:px-10 md:py-8 lg:px-36 lg:py-20 bg-gradient-to-t from-transparent to-purple-200 flex flex-col justify-around items-center'>
        <h1 className='lg:text-5xl font-semibold leading-tight text-stone-700 md:text-3xl xs:text-base'>Get Exclusive Offers On Your Email</h1>
        <p className='text-xl font-semibold lg:pt-7 lg:pb-6 md:pt-5 md:pb-10 xs:pt-3'>Subscribe to our newletter and stay updated</p>
        <div className='flex justify-between items-center bg-white rounded-full md:mt-0 xs:mt-10'>
          <input className='md:px-10 md:py-4 xs:px-6 xs:py-3 rounded-full xs:w-[75%]' type="text" placeholder='Your Email id' />
          <button className='md:px-10 md:py-4 xs:px-6 xs:py-3 xs:text-sm bg-black rounded-full text-white'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
