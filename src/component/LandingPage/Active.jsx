import React from 'react'
import via from '../photos/ActivitiesImg.png'
import f5 from '../photos/Frame 5(3).png'
import path from '../photos/Frame 5(4).png'
import ha from '../photos/Frame 156.png'
import soc from '../photos/Frame 159.png'
import shadow from '../photos/Frame 127(1).png'
function Active() {
  return (
    <div className='bg-[#0e1939ee] flex flex-col items-center justify-center text-white'>
        <div className='w-[80%] lg:flex py-[5%] justify-between'>
            <div><img src={via} alt="" /></div>
            <div className='flex flex-col gap-5'>
                <img src={f5} alt="" />
                <h1 className='text-[30px] font-bold'>Be part of our vision </h1>
                <img src={ha} alt="" />
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='items-center flex flex-col gap-5 py-[5%]'>
                <img src={path} alt="" />
                <h1 className='text-[30px] font-bold font-[Lexend]'>Our Partners & Sponsors</h1>
            </div>
            <div className='py-[%]'><img src={soc} alt="" /></div>
        </div>
          {/* /////////////Last Section */}
        <div className='flex flex-col pb-[4%]'>
            <div className='mt-[5%]'><img src={shadow} alt="" /></div>
           <div className='mt-[%] flex  flex-col'>
                <div className='lg:mt-[-20%] sm: mt-[-25%] ml-[10%] lg:font-bold lg:text-[25px]'> <h1>Explore The Potential Of <br /> Web3 & Blockchain</h1></div>
                <button className='bg-[#48CAE4] lg:w-[15%] sm: w-[25%] ml-[10%] lg:mt-4 lg:p-[10px] sm: p-1 lg:text-[20px] rounded-lg'>Learn More</button>
            </div>
        </div>
        
    </div>
  )
}

export default Active
