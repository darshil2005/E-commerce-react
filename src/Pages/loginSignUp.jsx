import React from 'react'

const LoginSignUp = () => {
  return (
    <div className='bg-pink-200 px-12'>
      <div className='container mx-auto flex justify-center items-center py-20'>
        <div className='bg-white px-10 py-12 w-[40%]'>
          <h1 className='text-4xl font-medium'>Sign Up</h1>
          <input type="text" className='mt-5 outline-none border border-dashed border-gray-300 placeholder:text-gray-400 px-3 py-3 w-full' placeholder='Your Name' /><br />
          <input type="email" className='mt-5 outline-none border border-dashed border-gray-300 placeholder:text-gray-400 px-3 py-3 w-full' placeholder='Email Address' /><br />
          <input type="password" className='mt-5 outline-none border border-dashed border-gray-300 placeholder:text-gray-400 px-3 py-3 w-full' placeholder='Password' /><br />
          <button className='px-10 py-4 bg-red-500 w-full my-7 text-lg text-white'>Continue</button>
          <p className='font-light'>Already have an account? <span className='text-red-500 font-semibold'>Login here</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp;
