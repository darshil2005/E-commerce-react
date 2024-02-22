import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='md:container md:mx-auto md:px-20 pt-12 xs:p-0 xs:mx-0'>
            <div className='bg-gradient-to-t from-purple-50 to-purple-200 flex lg:justify-around items-center md:justify-center lg:p-0 md:p-10 xs:py-10 xs:justify-center'>
                <div className='md:text-center lg:text-start xs:text-center'>
                    <div className='md:flex md:items-center md:gap-3 lg:block xs:flex xs:justify-center xs:gap-1'>
                        <h1 className='xs:text-2xl xs:font-bold md:text-4xl md:font-bold md:leading-tight lg:text-6xl lg:font-semibold lg:leading-tight'>Exclusive</h1>
                        <h1 className='xs:text-2xl xs:font-bold md:text-4xl md:font-bold md:leading-tight lg:text-6xl lg:font-semibold lg:leading-tight'>Offer For You</h1>
                    </div>
                    <p className='lg:text-2xl font-semibold lg:pt-7 lg:pb-6 md:pt-5 md:pb-4 md:text-xl xs:text-sm xs:font-semibold xs:pt-4'>ONLY ON BEST SALLERS PRODUCT</p>
                    <button className='xs:px-6 xs:py-2 xs:text-sm xs:mt-5 md:mt-0 lg:px-10 lg:py-4 bg-red-500 rounded-full text-white md:py-3 md:px-7'>Check Now</button>
                </div>
                <div className='lg:flex justify-center items-center md:hidden xs:hidden'>
                    <img className='w-3/4' src={exclusive_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offers
