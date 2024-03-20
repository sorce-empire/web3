import React from 'react'
import gr from '../photos/Group 41.png'
import mar from '../photos/mark.png'
import m2 from '../photos/Group 41(1).png'

function Statement() {
  return (
    <div className='flex flex-col gap-[100px] text-white bg-[#0E1939] items-center justify-center'>
      {/* ///////////statement 1 */}
      <div className='lg:flex w-[90%] gap-[10%] justify-around'>
        <div className='lg:w-[40%] gap-5 flex flex-col'>
          <h3 className='text-[50px]'>Mission Statement</h3>
          <p>At Web3Kwara, our mission is to democratize access to the transformative power of Web3 technologies for the people of Kwara State. We are dedicated to fostering innovation, inclusivity, and economic empowerment through blockchain, decentralized applications (DApps), and emerging technologies. By educating, engaging, and empowering our community, we aim to bridge the digital divide and create a more equitable future for all.</p>
          {/* /////////mark sec */}
          <div className='lg:flex gap-10'>            
            <div className='flex items-center gap-1'>
              <img src={mar} alt="" />
              <h6>Democratics access</h6>
            </div>
            {/* //////second */}
            <div className='flex items-center gap-3'>
              <img src={mar} alt="" />
              <h6>Foster Innovation <br /> and Inclusivity</h6>
            </div>
          </div>
        </div>
        <div className=' sm: mt-4'>
          <img src={gr} alt="" />
        </div>
      </div>
      {/* /////////////statement 2 */}
      <div className='lg:flex sm:flex-wrap-reverse w-[90%] gap-[10%] justify-around'>
        <div>
          <img src={m2} alt="" />
        </div>

        <div className='lg:w-[40%] sm: mt-4 gap-5 flex flex-col'>
          <h3 className='text-[50px]'>Vision Statement</h3>
          <p>Our vision for Web3Kwara is a Kwara State where every individual, regardless of background or location, can harness the opportunities presented by Web3 technologies. We aspire to see a thriving ecosystem of blockchain-based solutions that address local challenges, stimulate economic growth, and enhance transparency in governance.</p>
          {/* /////////mark sec */}
          <div className='lg:flex gap-10'>            
            <div className='flex items-center gap-1'>
              <img src={mar} alt="" />
              <h6>Thriving Web3 Ecosystem</h6>
            </div>
            {/* //////second */}
            <div className='flex items-center gap-3'>
              <img src={mar} alt="" />
              <h6>Empowered <br /> Community</h6>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Statement
