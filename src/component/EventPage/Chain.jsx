import React from 'react'
import gp from '../photos/Group 44.png'

function Chain() {
  return (
    <div className='bg-[#0B132B] text-white items-center justify-center pb-[4%] flex font-[Lexend]'>
      <div className='lg:flex w-[80%]  justify-between items-center'>
        <div className='flex flex-col lg:w-[35%] '>
          <h1 className='text-[40px]'>Blockchain for <br />Kwara - Empowering a Digital Future</h1>
          <h6 className='text-[gray]'>Discover the potential of decentralized finance, explore the world of NFTs, and learn how blockchain can revolutionize our communities.</h6>
          <button className='bg-[#48CAE4] text-black w-[40%] py-2 mt-5 rounded-[10px]'>join our community</button>
        </div>
        <div className='lg:w-[40%]'><img src={gp} alt="" /></div>
      </div>
    </div>
  )
}

export default Chain
