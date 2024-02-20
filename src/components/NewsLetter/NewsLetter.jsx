import React from 'react'

const NewsLetter = () => {
  return (
    <div className='container mx-auto px-20 pt-12'>
        <div className='md:px-10 md:py-8 px-36 py-20 bg-gradient-to-t from-transparent to-purple-200 flex flex-col justify-around items-center'>
            <h1 className='text-5xl font-semibold leading-tight text-stone-700 md:text-3xl'>Get Exclusive Offers On Your Email</h1>
            <p className='text-xl font-semibold pt-7 pb-6 md:pt-5 md:pb-10'>Subscribe to our newletter and stay updated</p>
            <div className='flex justify-between items-center bg-white rounded-full'>
                <input className='px-10 py-4 rounded-full' type="text" placeholder='Your Email id'/>
                <button className='px-10 py-4 bg-black rounded-full text-white'>Subscribe</button>
            </div>
            </div>
    </div>
  )
}

export default NewsLetter
