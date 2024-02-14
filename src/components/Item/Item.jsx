import React from 'react'


const Item = (props) => {
  return (
    <div className='scale-1 hover:scale-105 transition-all shadow-xl overflow-hidden p-7'>
      <img src={props.image} alt="" />
      <p className='pt-5 pb-2 font-medium'>{props.name}</p>
      <div className='flex gap-4'>
        <p className='font-semibold'>${props.new_price}</p>
        <p className='font-normal line-through text-gray-500'>${props.old_price}</p>
      </div>
    </div>
  )
}

export default Item
