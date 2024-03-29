import React from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
// dsddsadada

const NewColletions = () => {
  return (
    <div>
      <div className=''>
        <div className='container mx-auto md:px-20 xs:px-10 flex flex-col justify-center items-center gap-2 pt-20'>
          <h1 className='md:text-4xl font-semibold text-black xs:text-2xl'>New Collections</h1>
          <hr className='md:w-44 md:h-[6px] bg-stone-800 rounded-xl xs:w-36 xs:h-1' />
          <div className='grid lg:grid-cols-3 xl:grid-cols-4 gap-7 py-12 md:grid-cols-2'>
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
