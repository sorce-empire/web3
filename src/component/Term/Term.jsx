import React from 'react'

function Term() {
  return (
    <div className='bg-[#0B132B] py-5 flex flex-col items-center justify-center text-white font-[Lexend]'>
      <div className='w-[80%] flex flex-col gap-5'>
        <div className='flex flex-col gap-3 py-5'>
            <h1 className='font-bold text-[30px]'>Terms of services</h1>
            <h6 className='text-[#FFFFFF80]'>Last Updated: 23May, 2023</h6>
        </div>
        {/* ////////q1 */}
        <div className='flex flex-col gap-3'>
            <h6 className=''>1. Acceptance of Terms</h6>
            <h6 className='text-[#FFFFFF80]'>By accessing or using the [Your Website/Platform Name] ("Service"), you agree to comply with and be bound by these Terms of Service ("TOS"). If you do not agree to these terms, please do not use the Service.</h6>
        </div>
        {/* ////////q2 */}
        <div className='flex flex-col gap-3'>
            <h6 className=''>2. Changes to the TOS</h6>
            <h6 className='text-[#FFFFFF80]'>We reserve the right to modify these TOS at any time. Any changes will be effective immediately upon posting on the Service. You are responsible for regularly reviewing the TOS to stay informed of updates. Your continued use of the Service after changes to the TOS constitute your acceptance of the revised terms.</h6>
        </div>
         {/* ////////q3 */}
        <div className='flex flex-col gap-3'>
            <h6 className=''>3. User Accounts</h6>
            <h6 className='text-[#FFFFFF80]'>a. You may be required to create an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
               <br /> b. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
               <br /> c. We reserve the right to suspend or terminate your account at our discretion if we believe you have violated these TOS</h6>
        </div>
          {/* ////////q4 */}
          <div className='flex flex-col gap-3'>
            <h6 className=''>4. User Content</h6>
            <h6 className='text-[#FFFFFF80]'>a. You are solely responsible for any content you submit or post on the Service, including text, images, or any other material ("User Content").
              <br />  b. You grant [Your Company Name] a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display your User Content.
               <br /> c. You represent and warrant that your User Content does not infringe upon the rights of any third party.</h6>
        </div>
          {/* ////////q5 */}
          <div className='flex flex-col gap-3'>
            <h6 className=''>5. Prohibited Conduct</h6>
            <h6 className='text-[#FFFFFF80]'>You agree not to:
               <br /> a. Use the Service for any unlawful purpose or to engage in any illegal activity.
               <br /> b. Use the Service to harass, defame, abuse, threaten, or otherwise violate the rights of others.
               <br /> c. Attempt to gain unauthorized access to the Service, user accounts, or computer systems.
               <br /> d. Transmit or upload any viruses, worms, or malicious code.</h6>
        </div>
          {/* ////////q6 */}
        <div className='flex flex-col gap-3'>
            <h6 className=''>6. Privacy Policy</h6>
            <h6 className='text-[#FFFFFF80]'>
                Your use of the Service is also governed by our Privacy Policy, which can be found at [link to your Privacy Policy page].</h6>
        </div>
        {/* ////////q7 */}
        <div className='flex flex-col gap-3'>
            <h6 className=''>7. Disclaimer of Warranties</h6>
            <h6 className='text-[#FFFFFF80]'>
            The Service is provided "as is" and without warranties of any kind, either express or implied. We do not warrant that the Service will be error-free or uninterrupted, or that defects will be corrected.</h6>
        </div>
          {/* ////////q8 */}
        <div className='flex flex-col gap-3'>
            <h6 className=''>8. Limitation of Liability</h6>
            <h6 className='text-[#FFFFFF80]'>
            To the fullest extent permitted by applicable law, [Your Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses</h6>
        </div>
        {/* ////////q9 */}
        <div className='flex flex-col gap-3'>
            <h6 className=''>9. Governing Law and Jurisdiction</h6>
            <h6 className='text-[#FFFFFF80]'>
            These TOS are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. Any disputes arising from or relating to these TOS shall be subject to the exclusive jurisdiction of the state and federal courts located in [Your Jurisdiction].</h6>
        </div>
        {/* ////////q10 */}
        <div className='flex flex-col gap-3'>
            <h6 className=''>10. Contact Information</h6>
            <h6 className='text-[#FFFFFF80]'>
                If you have any questions about these Terms of Service, please contact us at <a className='text-[#48CAE4]' href="/">Customer support</a></h6>
        </div>
        
        
      </div>
    </div>
  )
}

export default Term
