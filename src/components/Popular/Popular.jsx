import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
    return (
        <div className='container mx-auto px-20 pt-12'>
            <div className=' flex flex-col justify-center items-center gap-2'>
                <h1 className='text-4xl font-semibold text-black'>POPULAR IN WOMEN</h1>
                <hr className='w-44 h-[6px] bg-stone-800 rounded-xl' />
                <div className='flex gap-7 py-12 md:grid md:grid-cols-2'>
                    {data_product.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Popular
