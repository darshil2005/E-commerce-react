import React from 'react'

const LoginSignUp = () => {
  return (
    <div className='bg-pink-200 px-12'>
      <div className='container mx-auto flex justify-center items-center py-20'>
        <div className='bg-white px-10 py-12 lg:w-[40%] md:w-[70%]'>
          <h1 className='lg:text-4xl font-medium md:text-3xl'>Sign Up</h1>
          <input type="text" className='md:px-2 md:py-2 md:placeholder:text-sm lg:placeholder:text-base mt-5 outline-none border border-dashed border-gray-300 placeholder:text-gray-400 lg:px-3 lg:py-3 w-full' placeholder='Your Name' /><br />
          <input type="email" className='md:px-2 md:py-2 md:placeholder:text-sm lg:placeholder:text-base mt-5 outline-none border border-dashed border-gray-300 placeholder:text-gray-400 lg:px-3 lg:py-3 w-full' placeholder='Email Address' /><br />
          <input type="password" className='md:px-2 md:py-2 md:placeholder:text-sm lg:placeholder:text-base mt-5 outline-none border border-dashed border-gray-300 placeholder:text-gray-400 lg:px-3 lg:py-3 w-full' placeholder='Password' /><br />
          <button className='md:py-3 md:px-7 lg:px-10 lg:py-4 bg-red-500 w-full my-7 text-lg text-white'>Continue</button>
          <p className='font-light md:text-sm lg:text-base'>Already have an account? <span className='text-red-500 font-semibold md:text-base lg:text-lg'>Login here</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp;

