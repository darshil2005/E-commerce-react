import React from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'


const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='container mx-auto px-20'>
            <div className='flex gap-16'>
                <div className='flex gap-5 w-[730px] flex-[0_0_730px]'>
                    <div className='flex flex-col gap-5'>
                        <img src={product.image} alt="" className='h-40 cursor-pointer' />
                        <img src={product.image} alt="" className='h-40 cursor-pointer' />
                        <img src={product.image} alt="" className='h-40 cursor-pointer' />
                        <img src={product.image} alt="" className='h-40 cursor-pointer' />
                    </div>
                    <div>
                        <img src={product.image} alt="" className='w-[586px] h-[700px] cursor-pointer' />
                    </div>
                </div>
                <div className='w-auto py-2'>
                    <h1 className='text-[34px] font-medium'>{product.name}</h1>
                    <div className='flex gap-2 mt-5'>
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className='flex gap-8 mt-12'>
                        <div className='text-3xl text-gray-500 line-through'>${product.old_price}</div>
                        <div className='text-3xl text-red-500 font-medium'>${product.new_price}</div>
                    </div>
                    <div className='text-base mt-10'>
                        A lightweight, usually knitted. puJover shirt, close-fitting ond with a neckline
                        and short sleeves, worn as an undershirt or outer garment.
                    </div>
                    <div className='mt-10'>
                        <h1 className='text-gray-600 text-2xl font-semibold'>Select Size</h1>
                        <div className='flex gap-5 mt-7'>
                            <div className='py-4 px-5 border border-slate-200  bg-slate-50 cursor-pointer'>S</div>
                            <div className='py-4 px-5 border border-slate-200  bg-slate-50 cursor-pointer'>M</div>
                            <div className='py-4 px-5 border border-slate-200  bg-slate-50 cursor-pointer'>L</div>
                            <div className='py-4 px-5 border border-slate-200  bg-slate-50 cursor-pointer'>XL</div>
                            <div className='py-4 px-5 border border-slate-200  bg-slate-50 cursor-pointer'>XXL</div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <button className='bg-red-500 text-white px-10 py-4'>ADD TO CART</button>
                    </div>
                    <div className='mt-14'>
                        <p><span className='font-semibold'>Category :</span>Women, T-shirt, Crop Top</p>
                        <p className='mt-3'><span className='font-semibold'>Tags :</span>Modern, Latest</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
