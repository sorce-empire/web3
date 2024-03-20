import React from 'react'
import im from '../photos/Event1.png'
import fr from '../photos/Frame 5.png'
import im2 from '../photos/Event2.png'
import im3 from '../photos/Event3.png'
import im5 from '../photos/Event5.png'
import im6 from '../photos/Event6.png'
import im7 from '../photos/Event8.png'
import im8 from '../photos/Event5(1).png'
import im9 from '../photos/Event6(1).png'
import im10 from '../photos/Event8(1).png'

function Events() {
  return (
    <div className='flex flex-col text-white items-center pb-6 justify-center bg-[#0E1939]'>
      <div className='w-[80] '>
        <div className='text-center flex flex-col gap-2 py-[5%] items-center justify-center'>
          <h1 className='text-[35px] lg:w-[40%] font-bold'>Available Web3 events coming up in kwara state</h1>
          <h6 className='lg:w-[45%] text-[#FFFFFF]'>Our event brings together experts, enthusiasts, and industry leaders for insightful discussions, hands-on workshops, and networking opportunities.</h6>
        </div>
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
        {/* /////////////third section*/}
        <div className='lg:flex items-center justify-center py-3'>
          <div className='flex flex-col lg:w-[30%] gap-2 lg:items-start sm: items-center'>
            <div><img src={im8} alt="" /></div>
            <div><img src={fr} alt="" /></div>
            <h2 className='font-bold'>Web3Kwara Developer Hackathon</h2>
            <h6 className='text-[13px]'>A hackathon inviting developers to build innovative decentralized applications (DApps) and blockchain solutions for local challenges.</h6>
            <h6 className='text-[#48CAE4]'>Fri, may 27, 8: 30 AM</h6>
          </div>
          {/* /////sb 1 */}
          <div className='flex flex-col lg:w-[30%] gap-2 lg:items-start sm: items-center'>
            <div><img src={im9} alt="" /></div>
            <div><img src={fr} alt="" /></div>
            <h2 className='font-bold'>Blockchain and Business: Transforming Kwara's Economy</h2>
            <h6 className='text-[13px]'>Exploring how blockchain technology can enhance business processes, reduce costs, and drive economic growth in Kwara State.</h6>
            <h6 className='text-[#48CAE4]'>Fri, may 27, 8: 30 AM</h6>
          </div>
          {/* /////sb 2 */}
          <div className='flex flex-col lg:w-[30%] gap-3 lg:items-start sm: items-center'>
            <div><img src={im10} alt="" /></div>
            <div><img src={fr} alt="" /></div>
            <h2 className='font-bold'>Web3Kwara Community Roundtable</h2>
            <h6 className='text-[13px]'>A recurring event where the local Web3 community gathers to discuss the latest trends, share insights, and foster collaboration.</h6>
            <h6 className='text-[#48CAE4]'>Fri, may 27, 8: 30 AM</h6>
          </div>
        </div>
        <div className='bg-[#0B132B] h-5'></div>
      </div>
      
    </div>
  )
}

export default Events
