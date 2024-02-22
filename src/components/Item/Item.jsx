import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='scale-1 hover:scale-105 transition-all shadow-xl overflow-hidden p-7'>
      <Link to={`/product/${props.id}`}><img src={props.image} className='ml:w-full' alt="item"/></Link>
      <p className='pt-5 pb-2 font-medium text-wrap'>{props.name}</p>
      <div className='flex gap-4'>
        <p className='font-semibold'>${props.new_price}</p>
        <p className='font-normal line-through text-gray-500'>${props.old_price}</p>
      </div>
    </div>
  )
}

export default Item
