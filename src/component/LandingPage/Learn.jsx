import React from 'react'
import imm from '../photos/Frame 5(1).png'
import arr from '../photos/tabler-icon-arrow-right.png'

function Learn() {
  return (
    <div className='lg:flex items-center py-[3%] justify-center bg-[#0E1939]'>
      <div className='lg:flex w-[80%] items-center justify-between'>
        <div className='flex flex-col'>
          <img src={imm} alt="" />
          <h1 className='font-extrabold text-[25px] text-white'>Connect, share, <br /> learn</h1>
        </div>
        <div className='text-[#48CAE4] lg:w-[10%] sm: w-[40%] items-center justify-center p-1 text-[12px] bg-[#0E1939] flex border-[#48CAE4] border-[0.5px] rounded-[10px]'>
          <button className=''>View all event</button>
          <img src={arr} alt="" />
        </div>
      
      </div>
       
    </div>
  )
}

export default Learn
