import React from 'react'
import im from '../photos/Event1.png'
import fr from '../photos/Frame 5.png'
import im2 from '../photos/Event2.png'
import im3 from '../photos/Event3.png'
import im5 from '../photos/Event5.png'
import im6 from '../photos/Event6.png'
import im7 from '../photos/Event8.png'
import frr from '../photos/Frame 5(2).png'
import joy from '../photos/JoysImg.png'
import social from '../photos/Frame 45.png'
import tosh from '../photos/ToshImg.png'
import jay from '../photos/JaysImg.png'
import pre from '../photos/PreciousImg.png'

function Eventt() {
  return (
    <div className='flex flex-col text-white items-center py-6 justify-center bg-[#0e1939ee]'>
      <div className='w-[80] '>
       
        {/* /////////////first */}
        <div className='lg:flex items-center justify-center py-3'>
          <div className='flex flex-col lg:w-[30%] gap-2 lg:items-start sm: items-center'>
            <div><img src={im} alt="" /></div>
            <div><img src={fr} alt="" /></div>
            <h2 className='font-bold'>Decentralized Finance (DeFi) Symposium</h2>
            <h6 className='text-[13px]'>A deep dive into the world of DeFi, exploring how decentralized financial solutions can benefit individuals in Kwara State.</h6>
            <h6 className='text-[#48CAE4]'>Fri, may 27, 8: 30 AM</h6>
          </div>
          {/* /////sb 1 */}
          <div className='flex flex-col lg:w-[30%] gap-2 lg:items-start sm: items-center'>
            <div><img src={im2} alt="" /></div>
            <div><img src={fr} alt="" /></div>
            <h2 className='font-bold'>Web3Kwara Blockchain Workshop</h2>
            <h6 className='text-[13px]'>A deep dive into the world of DeFi, exploring how decentralized financial solutions can benefit individuals in Kwara State.</h6>
            <h6 className='text-[#48CAE4]'>Fri, may 27, 8: 30 AM</h6>
          </div>
          {/* /////sb 2 */}
          <div className='flex flex-col lg:w-[30%] gap-3 lg:items-start sm: items-center'>
            <div><img src={im3} alt="" /></div>
            <div><img src={fr} alt="" /></div>
            <h2 className='font-bold'>NFT Showcase and Art Auction</h2>
            <h6 className='text-[13px]'>An educational event focusing on the fundamentals of blockchain technology and its potential applications.</h6>
            <h6 className='text-[#48CAE4]'>Fri, may 27, 8: 30 AM</h6>
          </div>
        </div>
        {/* /////////////second set */}
        <div className='lg:flex items-center justify-center py-3'>
          <div className='flex flex-col lg:w-[30%] gap-2 lg:items-start sm: items-center'>
            <div><img src={im5} alt="" /></div>
            <div><img src={fr} alt="" /></div>
            <h2 className='font-bold'>Blockchain for Social Impact</h2>
            <h6 className='text-[13px]'>Exploring how blockchain and Web3 technologies can be harnessed for social and environmental good in Kwara State.</h6>
            <h6 className='text-[#48CAE4]'>Fri, may 27, 8: 30 AM</h6>
          </div>
          {/* /////sb 1 */}
          <div className='flex flex-col lg:w-[30%] gap-2 lg:items-start sm: items-center'>
            <div><img src={im6} alt="" /></div>
            <div><img src={fr} alt="" /></div>
            <h2 className='font-bold'>Web3 Hackathon: Building for Kwara</h2>
            <h6 className='text-[13px]'>A hands-on event where developers and entrepreneurs come <br /> together to build Web3 solutions addressing local challenges.</h6>
            <h6 className='text-[#48CAE4]'>Fri, may 27, 8: 30 AM</h6>
          </div>
          {/* /////sb 2 */}
          <div className='flex flex-col lg:w-[30%] gap-3 lg:items-start sm: items-center'>
            <div><img src={im7} alt="" /></div>
            <div><img src={fr} alt="" /></div>
            <h2 className='font-bold'>Crypto Investment and Trading Masterclass</h2>
            <h6 className='text-[13px]'>Educating attendees on safe and responsible cryptocurrency investment and trading strategies.</h6>
            <h6 className='text-[#48CAE4]'>Fri, may 27, 8: 30 AM</h6>
          </div>
       
        </div>
        <div className='lg:flex flex-col mt-[7%] items-center justify-center'>
            <div className='flex flex-col lg:ml-[-65%]'>
                <div><img src={frr} alt="" /></div>
                <h1 className='text-[30px] font-bold'>Meet Our Organisers</h1>
            </div>
            <div className='lg:flex items-center mt-[4%] justify-between w-[80%]'>
                {/* //////host 1 */}
                <div className='flex p-7 flex-col items-center sm: mt-9 lg:mt-0 justify-between bg-[#0E1939] lg:w-[20%]  rounded-[15px]'>
                    <div className='flex mt-[-60px] w-[50%]'><img src={joy} alt="" /></div>
                    <div className='flex flex-col items-center mt-[30px] justify-center'>
                     <h1 className='font-bold text-[20px]'>Abubakar .S.</h1>
                     <h6 className='text-[#F5F5F580]'>Host</h6>
                    </div>
                    <div className='mt-5'><img src={social} alt="" /></div>
                </div>
                {/* //////host 2 */}
                <div className='flex p-7 flex-col items-center sm: mt-9 lg:mt-0 justify-between bg-[#0E1939] lg:w-[20%] rounded-[15px]'>
                    <div className='flex mt-[-60px] w-[50%]'><img src={pre} alt="" /></div>
                    <div className='flex flex-col items-center mt-[30px] justify-center'>
                     <h1 className='font-bold text-[20px]'>Precious Okpara</h1>
                     <h6 className='text-[#F5F5F580]'>Organiser</h6>
                    </div>
                    <div className='mt-5'><img src={social} alt="" /></div>
                </div>
                {/* //////host 3 */}
                <div className='flex p-7 flex-col items-center justify-between sm: mt-9 lg:mt-0 bg-[#0E1939] lg:w-[20%] rounded-[15px]'>
                    <div className='flex mt-[-60px] w-[50%]'><img src={jay} alt="" /></div>
                    <div className='flex flex-col items-center mt-[30px] justify-center'>
                     <h1 className='font-bold text-[20px]'>Jays Alimi</h1>
                     <h6 className='text-[#F5F5F580]'>Host Assistant</h6>
                    </div>
                    <div className='mt-5'><img src={social} alt="" /></div>
                </div>
                {/* //////host 4 */}
                <div className='flex p-7 flex-col items-center justify-between bg-[#0E1939] sm: mt-9 lg:mt-0 lg:w-[20%] rounded-[15px]'>
                    <div className='flex mt-[-60px] w-[50%] '><img src={tosh} alt="" /></div>
                    <div className='flex flex-col items-center mt-[30px] justify-center'>
                     <h1 className='font-bold text-[20px]'>Tosh Money</h1>
                     <h6 className='text-[#F5F5F580]'>Host</h6>
                    </div>
                    <div className='mt-5'><img src={social} alt="" /></div>
                </div>
            </div>
        </div>
       
        
      </div>
      
    </div>
  )
}

export default Eventt
