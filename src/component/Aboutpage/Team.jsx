import React from 'react'
import a from '../photos/Ellipse 44.png'
import soc from '../photos/Frame 122.png'
import b from '../photos/Ellipse 45.png'
import c from '../photos/Ellipse 46.png'
import d from '../photos/Ellipse 47.png'
import shadow from '../photos/Frame 127(1).png'

function Team() {
  return (
    <div className='bg-[#0e2839] text-white flex flex-col items-center justify-center py-[8%]'>
      <div className='flex flex-col'>
        <h1 className='font-semibold text-[40px] text-center'>Meet The Team</h1>
        <h5 className='text-center'>Join Web3Kwara Community and Explore the Possibilities of <br /> Web3 Technology</h5>
      </div>
      <div className='lg:flex lg:w-[80%] mt-[8%] gap-[5%]'>
        <div className='flex flex-col lg:w-[20%] sm: px-10 items-center bg-[#0E1939] rounded-lg py-5 gap-4'>
          <div><img src={a} alt="" /></div>
          <h3>Abubakar .Ajao.</h3>
          <h6>Community Lead</h6>
          <div><img src={soc} alt="" /></div>
        </div>
        {/* /////////////////product ma */}
        <div className='flex flex-col lg:w-[20%] sm: px-10 items-center bg-[#0E1939] rounded-lg py-5 gap-4'>
          <div><img src={b} alt="" /></div>
          <h4>Abubakar Naimat</h4>
          <h6>Product designer</h6>
          <div><img src={soc} alt="" /></div>
        </div>
        {/* /////////////Team memb. */}
        <div className='flex flex-col lg:w-[20%] items-center bg-[#0E1939] rounded-lg py-5 gap-4'>
          <div><img src={c} alt="" /></div>
          <h3>Mubarak .Ilyass.</h3>
          <h6>Team lead</h6>
          <div><img src={soc} alt="" /></div>
        </div>
        {/* //////////////Community leads//// */}
        <div className='flex flex-col lg:w-[20%] items-center bg-[#0E1939] rounded-lg py-5 gap-4'>
          <div><img src={d} alt="" /></div>
          <h3>Abubakar soliu</h3>
          <h6>Community Lead</h6>
          <div><img src={soc} alt="" /></div>
        </div>       
      </div>
      {/* /////////////Last Section */}
      <div className='py-[5%]'>
        <div><img src={shadow} alt="" /></div>
        <div className='lg:mt-[-23%] sm: mt-[-28%] ml-[10%] lg:font-bold lg:text-[25px]'> <h1>Explore The Potential Of <br /> Web3 & Blockchain</h1></div>
        <button className='bg-[#48CAE4] ml-[10%] lg:mt-4 lg:p-[10px] sm: p-1 lg:text-[20px] rounded-lg'>Learn More</button>
      </div>
    </div>
  )
}

export default Team
