import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='container mx-auto px-20 pt-12'>
            <div className='bg-gradient-to-t from-purple-50 to-purple-200 flex lg:justify-around items-center md:justify-center lg:p-0 md:p-10'>
                <div className='md:text-center lg:text-start'>
                    <div className='md:flex md:items-center md:gap-3 lg:block'>
                        <h1 className='md:text-4xl md:font-bold md:leading-tight lg:text-6xl lg:font-semibold lg:leading-tight'>Exclusive</h1>
                        <h1 className='md:text-4xl md:font-bold md:leading-tight lg:text-6xl lg:font-semibold lg:leading-tight'>Offer For You</h1>
                    </div>
                    <p className='lg:text-2xl font-semibold lg:pt-7 lg:pb-6 md:pt-5 md:pb-4 md:text-xl'>ONLY ON BEST SALLERS PRODUCT</p>
                    <button className='lg:px-10 lg:py-4 bg-red-500 rounded-full text-white md:py-3 md:px-7'>Check Now</button>
                </div>
                <div className='lg:flex justify-center items-center md:hidden '>
                    <img className='w-3/4' src={exclusive_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offers
