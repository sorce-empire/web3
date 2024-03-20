import React from 'react'
import Navbar from '../Navbar'
import Future from '../LandingPage/Future'
import Over from '../LandingPage/Over'
import WebAbout from './WebAbout'
import Learn from './Learn'
import Eventt from './Eventt'
import Active from './Active'
import JoinNow from '../Aboutpage/JoinNow'
import Footer from '../Footer'

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Future/>
      <Over/>
      <WebAbout/>
      <Learn/>
      <Eventt/>
      <Active/>
      <JoinNow/>
      <Footer/>
      
           
    </div>
  )
}

export default LandingPage
