import React, { useEffect } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'


const ProductDisplay = (props) => {
    const { product } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className='container mx-auto px-20 md:px-5 xs:px-3'>
            <div className='flex xl:flex-row md:flex-col xs:flex-col 1xl:gap-14 xl:gap-10 md:gap-5'>
                <div className='flex md:flex-row xs:flex-col-reverse gap-5 flex-1 lg:justify-center lg:items-center ml:justify-center ml:items-center'>
                    <div className='flex md:flex-col gap-5 '>
                        <img src={product.image} alt="" className='md:h-40 ml:h-[90px] mm:h-[87px] xs:h-[71px] cursor-pointer' />
                        <img src={product.image} alt="" className='md:h-40 ml:h-[90px] mm:h-[87px] xs:h-[71px] cursor-pointer' />
                        <img src={product.image} alt="" className='md:h-40 ml:h-[90px] mm:h-[87px] xs:h-[71px] cursor-pointer' />
                        <img src={product.image} alt="" className='md:h-40 ml:h-[90px] mm:h-[87px] xs:h-[71px] cursor-pointer' />
                    </div>
                    <div>
                        <img src={product.image} alt="" className='md:h-[700px] md:w-auto xs:w-auto xs:h-[430px] cursor-pointer' />
                    </div>
                </div>
                <div className='w-auto py-2 flex-1'>
                    <h1 className='md:text-[34px] md:font-medium md:mt-5 xs:text-2xl xs:font-semibold xs:mt-8'>{product.name}</h1>
                    <div className='flex gap-1 items-center md:mt-5 xs:mt-3'>
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p className='mt-1'>(122)</p>
                    </div>
                    <div className='flex xl:gap-8 md:mt-12 md:gap-5 xs:mt-7 xs:gap-4'>
                        <div className='md:text-3xl xs:text-2xl text-gray-500 line-through'>${product.old_price}</div>
                        <div className='md:text-3xl xs:text-2xl text-red-500 font-medium'>${product.new_price}</div>
                    </div>
                    <div className='text-base md:mt-10 md:text-lg xs:mt-6'>
                        A lightweight, usually knitted. puJover shirt, close-fitting ond with a neckline
                        and short sleeves, worn as an undershirt or outer garment.
                    </div>
                    <div className='md:mt-10 xs:mt-7'>
                        <h1 className='text-gray-600 text-2xl font-semibold'>Select Size</h1>
                        <div className='flex md:gap-5 md:mt-7 xs:mt-4 xs:gap-4'>
                            <div className='xs:py-2 xs:px-3 md:py-4 md:px-5 border border-slate-200 bg-slate-50 cursor-pointer'>S</div>
                            <div className='xs:py-2 xs:px-3 md:py-4 md:px-5 border border-slate-200 bg-slate-50 cursor-pointer'>M</div>
                            <div className='xs:py-2 xs:px-3 md:py-4 md:px-5 border border-slate-200 bg-slate-50 cursor-pointer'>L</div>
                            <div className='xs:py-2 xs:px-3 md:py-4 md:px-5 border border-slate-200 bg-slate-50 cursor-pointer'>XL</div>
                            <div className='xs:py-2 xs:px-3 md:py-4 md:px-5 border border-slate-200 bg-slate-50 cursor-pointer'>XXL</div>
                        </div>
                    </div>
                    <div className='md:mt-6 xs:mt-12 md:block ml:justify-start xs:flex xs:justify-center xs:items-center'>
                        <button className='bg-red-500 text-white xl:px-10 md:px-7 md:py-4 md:text-lg xs:px-6 xs:py-3'>ADD TO CART</button>
                    </div>
                    <div className='mt-14'>
                        <p className='md:text-lg'><span className='font-semibold mr-2'>Category :</span>Women, T-shirt, Crop Top</p>
                        <p className='mt-3 md:text-lg'><span className='font-semibold mr-2'>Tags :</span>Modern, Latest</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
