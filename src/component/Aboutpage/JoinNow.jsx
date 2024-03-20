import React from 'react'
import gr from '../photos/Mem.png'
function JoinNow() {
  return (
    <div className='bg-[#0E1939] text-white py-[7%] flex items-center justify-center'>
      <div className='lg:flex w-[80%] lg:gap-[35%]'> 
        <div className='flex flex-col lg:w-[30%] gap-4npm'>
          <h1 className=' text-[30px] font-bold'>Journey To Join Over 2,000+ Members In The Community</h1>
          <button className='bg-[#48CAE4] py-2 rounded-md w-[45%]'>Join Now!!!</button>
        </div>
        <div className='lg:w-[30%] sm: mt-9'>
          <img src={gr} alt="" />
        </div>
      </div>
    </div>
  )
}

export default JoinNow
