import React from 'react'
import logo from './photos/web3Logo.png'

function Navbar() {
  return (
    <div className='bg-[#0B132B] font-[Lexend] flex text-white items-center justify-center py-[2%]'>
      <div className='w-[80%] bg-[#0E1939] flex py-3 px-2 border-gray-500 border-[0.05px] justify-between'>
        <div className=' '>
          <img src={logo} alt="" />
        </div>
        <div className='gap-3 lg:flex sm: hidden items-center justify-center'>
          <a href="/LandPage">Home</a>
          <a className='text-blue-400' href="/Aboutpage">About</a>
          <a href="/Event">Event</a>
        </div>
        <button className='bg-[#48CAE4] lg:px-4 sm: p-2 rounded-[25px] text-[20px] lg:font-bold'>Join Us</button>
      </div>
    </div>
  )
}

export default Navbar
