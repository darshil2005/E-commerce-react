import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='container mx-auto px-20 pt-12'>
            <div className='bg-gradient-to-t from-purple-50 to-purple-200 flex justify-around items-center md:justify-center md:p-10'>
                <div className='md:text-center'>
                    <div className='md:flex md:items-center md:gap-3'>
                        <h1 className='md:text-4xl md:font-bold md:leading-tight text-6xl font-semibold leading-tight'>Exclusive</h1>
                        <h1 className='md:text-4xl md:font-bold md:leading-tight text-6xl font-semibold leading-tight'>Offer For You</h1>
                    </div>
                    <p className=' text-2xl font-semibold pt-7 pb-6 md:pt-5 md:pb-4 md:text-xl'>ONLY ON BEST SALLERS PRODUCT</p>
                    <button className='px-10 py-4 bg-red-500 rounded-full text-white md:py-3 md:px-7'>Check Now</button>
                </div>
                <div className='flex justify-center items-center md:hidden '>
                    <img className='w-3/4' src={exclusive_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offers
