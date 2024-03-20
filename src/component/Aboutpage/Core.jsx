import React from 'react'
import one from '../photos/1.png'
import two from '../photos/2.png'
import three from '../photos/3.png'
import four from '../photos/4.png'
import five from '../photos/5.png'
import six from '../photos/6.png'

function Core() {
  return (
    <div className='flex flex-col items-center py-[8%] justify-center text-white bg-[#0E1939]'>
      <div className='flex flex-col lg:w-[50%]  text-center items-center'>
        <h1 className='text-[30px] font-bold lg:w-[70%] text-center'>Core values of web3Kwara initiative</h1>
        <h6 className='lg:w-[60%] text-center'>Join Web3Kwara Community and Explore the Possibilities of Web3 Technology</h6>
      </div>
      {/* ///////////////informations  */}
      <div className='w-[80%] mt-[5%]'>
        <div className='lg:flex justify-around'>
          {/* ///////sub info */}
          <div className='flex flex-col lg:w-[22%] gap-3 py-9 px-4 bg-[#0B132B] rounded'>
            <div><img src={one} alt="" /></div>
            <h3 className='font-bold'>Inclusivity</h3>
            <p className='text-[15px] text-gray-300'>We are committed to creating an inclusive environment where everyone, regardless of their background, can participate and benefit from Web3 technologies. We believe that diversity of perspectives and experiences enriches our community and leads to more robust solutions.</p>
          </div>
          {/* ///////////two */}
          <div className='flex flex-col sm: mt-5 lg:w-[22%] gap-3 py-9 px-4 bg-[#0B132B] rounded'>
            <div><img src={two} alt="" /></div>
            <h3 className='font-bold'>Transparency</h3>
            <p className='text-[15px] text-gray-300'>Transparency is at the heart of our operations. We believe in open and accountable communication with our community members, partners, and stakeholders. We are dedicated to ensuring that our actions and decisions are clear and understandable.</p>
          </div>
          {/* /////////////three */}
          <div className='flex flex-col lg:w-[22%] sm: mt-4 gap-3 py-9 px-4 bg-[#0B132B] rounded'>
            <div><img src={three} alt="" /></div>
            <h3 className='font-bold'>Empowerment</h3>
            <p className='text-[15px] text-gray-300'>We seek to empower individuals and communities through education, resources, and opportunities. We believe that by providing the tools and knowledge needed to engage with Web3 technologies, we can enable people to take control of their digital futures.</p>
          </div>
        </div>
        {/* ///////////section row two */}
        <div className='lg:flex justify-around'>
          {/* ///////sub info 4 */}
          <div className='flex flex-col sm: mt-5 lg:w-[22%] gap-3 py-9 px-4 bg-[#0B132B] rounded'>
            <div><img src={four} alt="" /></div>
            <h3 className='font-bold'>Innovation</h3>
            <p className='text-[15px] text-gray-300'>Innovation drives our mission. We encourage creativity, experimentation, and the development of groundbreaking solutions that address the unique challenges faced by Kwara State and its residents..</p>
          </div>
          {/* ///////////FIVE */}
          <div className='flex flex-col sm: mt-5 lg:w-[22%] gap-3 py-9 px-4 bg-[#0B132B] rounded'>
            <div><img src={five} alt="" /></div>
            <h3 className='font-bold'>Collaboration</h3>
            <p className='text-[15px] text-gray-300'>We understand the power of collaboration. We actively seek partnerships with local and global organizations, projects, and individuals who share our mission and can help us amplify our impact.</p>
          </div>
          {/* /////////////SIX 6 */}
          <div className='flex flex-col lg:w-[22%] sm: mt-4 gap-3 py-9 px-4 bg-[#0B132B] rounded'>
            <div><img src={six} alt="" /></div>
            <h3 className='font-bold'>Ethical Responsibility</h3>
            <p className='text-[15px] text-gray-300'>.We uphold ethical principles in all our endeavors. We prioritize the responsible and ethical use of Web3 technologies, ensuring that our actions contribute positively to the well-being of the community and society at large..</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Core
