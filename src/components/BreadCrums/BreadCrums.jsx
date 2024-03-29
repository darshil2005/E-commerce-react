import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const BreadCrums = (props) => {
  const { product } = props;
  return (
    <div className='container mx-auto px-20 md:px-5 xs:px-0 ml:px-3'>
      <div className='flex justify-start items-center gap-3 my-20 md:my-16 md:text-lg md:gap-2 xs:my-8 xs:text-sm xs:gap-1'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
      </div>
    </div>
  )
}

export default BreadCrums
