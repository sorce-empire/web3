import React from 'react'

function Over() {
  return (
    <div className='bg-[#0E1939] flex text-white py-[4%] items-center justify-center'>
        <div className='w-[80%] lg:flex items-center justify-between'>
            <div className='font-bold text-[35px]'><h1>With a growing of <br /> over -</h1></div>
            <div className='flex items-center gap-[20px] justify-center'>
                <div className='flex flex-col  text-center'>
                    <h1 className='text-[20px] font-bold'>2K+</h1>
                    <h6 className='text-[15px]'>Community members</h6>
                </div>
                {/* //////sec2 */}
                <div className='flex flex-col'>
                    <h1 className='text-[20px] font-bold'>10K+</h1>
                    <h6 className='text-[15px]'>Partners & Sponsors</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Over
