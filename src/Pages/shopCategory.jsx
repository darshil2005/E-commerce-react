import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='container mx-auto px-20'>
        <img className='py-10' src={props.banner} alt="banner" />
        <div className='flex justify-between items-center'>
          <p className='font-normal'>
            <span className='font-semibold'>Showing 1-12</span> out of 36 Products 
          </p>
          <div  className='flex justify-between items-center gap-3 border border-black px-5 py-2 rounded-full cursor-pointer'> 
            Sort by <img src={dropdown_icon} alt="drop_down_icon" />
          </div>
        </div>
        <div className='grid grid-cols-4 gap-7 py-12'>
          {all_product.map((item,i)=>{
            if(props.category===item.category) {
              return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else {
              return null;
            }
          })}
        </div>
        <div className='flex justify-center items-center mt-20'>
          <button className='bg-gray-100 text-gray-500 py-5 px-12 rounded-full'>Explore More</button>
        </div>
    </div>
  )
}

export default ShopCategory;
