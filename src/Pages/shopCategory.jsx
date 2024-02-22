import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='container mx-auto lg:px-20 md:px-10 '>
      <img className='lg:py-10 md:py-5 md:block xs:hidden' src={props.banner} alt="banner" />
      <div className='flex justify-between items-center md:mt-0 xs:mt-10 md:px-0 xs:px-2'>
        <p className='md:font-normal md:text-base xs:text-base xs:font-normal'>
          <span className='font-semibold'>Showing 1-12</span> out of 36 Products
        </p>
        <div className='xs:px-4 xs:py-1 xs:text-base xs:text-nowrap xs:justify-center md:px-3 md:py-1 md:text-sm flex md:justify-between items-center gap-3 border border-black lg:px-5 lg:py-2 lg:text-xl rounded-full cursor-pointer'>
          Sort by <img src={dropdown_icon} alt="drop_down_icon" />
        </div>
      </div>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 gap-7 py-12 md:grid-cols-2 md:px-0 xs:px-10'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className='flex justify-center items-center md:mt-20 md:mb-0 xs:mt-5 xs:mb-10'>
        <button className='bg-gray-100 text-gray-500 py-5 px-12 rounded-full'>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory;
