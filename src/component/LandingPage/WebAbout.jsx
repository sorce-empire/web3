import React from 'react'
import im from '../photos/AboutImg.png'
import ww from '../photos/W Doddle.png'
import fr from '../photos/Frame 5(4).png'

function WebAbout() {
  return (
    <div className='bg-[#0B132B] flex items-center py-[5%] justify-around'>
      <div className='lg:w-[80%] lg:flex items-center lg:ml-[20%] justify-between gap-[10%]'>
        <div><img src={im} alt="" /></div>
        <div className='flex flex-col ml-[10%] lg:w-[60%]'>
          <img src={fr} alt="" />
          <h1 className='font-bold text-white text-[20px]'>About Web 3Kwara</h1>
          <h6 className='text-[#FFFFFF99]'>Web3Kwara is a community dedicated to spreading awareness and driving adoption of Web3, blockchain technology, and its potential in the Kwara State. We are a group of individuals passionate about the future of the Web3 and believe that Web3 has the potential to revolutionize the way we interact and transact With the internet.</h6>
        </div>               
      </div>
      <div className='h-[40%]'><img src={ww} alt="" /></div>
    </div>
  )
}

export default WebAbout
