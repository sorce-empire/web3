import React from 'react'
import logo from './photos/web3Logo.png'
import social from './photos/Frame 122.png'
function Footer() {
  return (
    <div className='bg-[#0B132B] pb-5 flex flex-col items-center justify-center text-white'>
      <div className='flex w-[80%] items-center justify-between py-[2%]'>
        <div><img src={logo} alt="" /></div>
        <div><img src={social} alt="" /></div>
      </div>
      <div className='bg-[#0E1939] w-[60%] py-3 my-7 text-white text-center gap-4 justify-center flex'>
        <a href="/Aboutpage">About</a>
        <a href="#/">Blog</a>
        <a href="/Event">Event</a>
        <a href="/Terms">Terms of Services</a>
      </div>
      <div><h6>All Right Reserve - Web3Kwara.org</h6></div>
    </div>
  )
}

export default Footer
