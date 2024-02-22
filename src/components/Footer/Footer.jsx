import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='container mx-auto md:px-20 xs:px-8 md:pt-12 xs:pt-5 flex justify-center items-center flex-col'>
            <div className='flex items-center gap-5 md:font-medium xs:font-semibold'>
                <img src={footer_logo} alt="" />
                <p className='md:text-5xl xs:text-3xl'>SHOPPER</p>
            </div>
            <div className='flex items-center md:gap-12 py-10 md:text-lg xs:gap-3 xs:flex-col md:flex-row'>
                <a href="#">Company</a>
                <a href="#">Products</a>
                <a href="#">Offices</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className='w-full'>
                <div className='flex justify-center items-center md:gap-12 xs:gap-5'>
                    <img className='p-2 bg-slate-50 border border-slate-200 rounded-lg' src={instagram_icon} alt="" />
                    <img className='p-2 bg-slate-50 border border-slate-200 rounded-lg' src={pintester_icon} alt="" />
                    <img className='p-2 bg-slate-50 border border-slate-200 rounded-lg' src={whatsapp_icon} alt="" />
                </div>
                <div className='w-full py-10'>
                    <hr className='h-1 bg-gray-300' />
                    <p className='text-center pt-5 md:text-base xs:text-xs'>Copyright @ 2023 - All Right Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
