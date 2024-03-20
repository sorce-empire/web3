import React from 'react'
import roc from '../photos/rocket.png'

function Rocket() {
  return (
    <div  className='bg-[#0B132B] text-white font-[Lexend] flex items-center justify-center'>
      <div className='w-[80%] lg:flex items-center py-5 gap-5 justify-between'>
        <div className='flex flex-col lg:w-[40%]'>
          <h1 className='lg:font-bold text-[40px] '>Sorry, This Page is Under Development</h1>
          <p className='text-[#FFFFFF99]'>We’re still building our website and some of our pages are not yet live yet. Is there anything you were looking for, please send us an email or chat with us using the Support widget on the bottom right of this page.</p>
          <button className='rounded-[15px] bg-[#48CAE4] mt-6 w-[30%] py-2'>back to home</button>
        </div>
        <div><img src={roc} alt="" /></div>
      </div>
      
    </div>
  )
}

export default Rocket
