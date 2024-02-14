import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className='container mx-auto px-20 pt-12'>
            <div className='bg-gradient-to-t from-purple-50 to-purple-200 flex justify-around items-center'>
                <div className=''>
                    <h1 className='text-6xl font-semibold leading-tight'>Exclusive</h1>
                    <h1 className='text-6xl font-semibold leading-tight'>Offer For You</h1>
                    <p className='text-2xl font-semibold pt-7 pb-6'>ONLY ON BEST SALLERS PRODUCT</p>
                    <button className='px-10 py-4 bg-red-500 rounded-full text-white'>Check Now</button>
                </div>
                <div>
                    <img className='w-3/4' src={exclusive_image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Offers
