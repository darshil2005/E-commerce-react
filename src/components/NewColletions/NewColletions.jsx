import React from 'react'
import new_collections from '../Assets/new_collections' 
import Item from '../Item/Item'

const NewColletions = () => {
  return (
    <div>
       <div className=''>
            <div className='container mx-auto px-20 flex flex-col justify-center items-center gap-2 py-12'>
                <h1 className='text-4xl font-semibold text-black'>New Collections</h1>
                <hr className='w-44 h-[6px] bg-stone-800 rounded-xl' />
                <div className='grid grid-cols-4 gap-7 py-12'>
                    {new_collections.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewColletions
