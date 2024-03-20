import React from 'react'

function Grow() {
  return (
    <div className='flex items-center text-white bg-[#0E1939] text-center font-[Lexend] py-[5%]  justify-center'>
      <div className='w-[90%] lg:flex justify-around'>
        <h1 className=' uppercase font-[Lexend] font-bold text-left text-[30px]'>we grow and didn’t <br /> stop there...!</h1>
        <div className='lg:flex gap-[50%]'>
         <div className='flex flex-col gap-5'>
           <div className=''>  
              <h1 className='text-[30px] font-bold'>500+</h1>
              <h6 className='text-[12px]'>Job opportunity</h6>
            </div>
            <div className=''>
              <h1 className='text-[30px] font-bold'>2,000+</h1>
              <h6 className='text-[12px]'>Community members</h6>
            </div>
         </div>
         {/* /////////////////fig 2 */}
         <div className='flex flex-col gap-5'>
           <div className=''>  
              <h1 className='text-[30px] font-bold'>4,000+</h1>
              <h6 className='text-[10px]'>Education resources</h6>
            </div>
            <div className=''>
              <h1 className='text-[30px] font-bold'>10+</h1>
              <h6 className='text-[12px]'>Close partners</h6>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Grow
