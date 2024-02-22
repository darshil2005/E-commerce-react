import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState("Shop");

  return (
    <div>
      {/* <div className='lg:hidden'>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">  
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Info</li></a>
              <a href="#"><li>Contact</li></a>
              <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul>
          </div>
        </nav>
      </div> */}
      <nav className='lg:flex justify-around p-4 shadow-lg md:hidden xs:hidden'>
      <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        <p className='text-black text-4xl font-semibold'>SHOPPER</p>
      </div>
      <div className="flex items-center gap-12 text-xl">
        <a className='cursor-pointer' onClick={() => { setMenu("Shop") }}><Link to='/'>Shop</Link> {menu === "Shop" ? <hr className='h-[3px] bg-red-600' /> : <></>}</a>
        <a className='cursor-pointer' onClick={() => { setMenu("Men") }}><Link to='/mens'>Men</Link> {menu === "Men" ? <hr className='h-[3px] bg-red-600' /> : <></>}</a>
        <a className='cursor-pointer' onClick={() => { setMenu("Women") }}><Link to='/womens'>Women</Link> {menu === "Women" ? <hr className='h-[3px] bg-red-600' /> : <></>}</a>
        <a className='cursor-pointer' onClick={() => { setMenu("Kids") }}><Link to='/kids'>Kids</Link> {menu === "Kids" ? <hr className='h-[3px] bg-red-600' /> : <></>}</a>
      </div>
      <div className="flex items-center gap-11 relative">
        <Link to='/login'>
          <button className='px-10 py-4 outline-none border border-gray-400 rounded-[75px] text-gray-600 text-xl font-medium bg-white cursor-pointer'>
            Login
          </button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} className='z-50' alt="" />
        </Link>
        <div className='absolute w-5 h-5 -right-3 top-1 bg-red-500 text-white rounded-full flex items-center justify-center'>0</div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
