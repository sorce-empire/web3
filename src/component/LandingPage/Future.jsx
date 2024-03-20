import React from 'react'
import gp1 from '../photos/Group 22.png'

function Future() {
  return (
    <div className='bg-[#0B132B] text-white items-center justify-center pb-[4%] flex font-[Lexend]'>
         <div className='lg:flex w-[80%]  justify-between items-center'>
        <div className='flex flex-col lg:w-[35%] '>
          <h1 className='text-[40px] font-bold'>Empowering the <br /> Future of the Internet In Kwara State</h1>
          <h6 className='text-[gray]'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</h6>
          <button className='bg-[#48CAE4] text-black lg:w-[40%] sm: w-[50%] py-2 mt-5 rounded-[10px]'>join our community</button>
        </div>
        <div className='lg:w-[40%]'><img src={gp1} alt="" /></div>
      </div>
    </div>
  )
}

export default Future
