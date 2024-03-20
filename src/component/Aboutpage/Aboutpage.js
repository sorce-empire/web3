import React from 'react'
import Mission from '../Aboutpage/Mission'
import Grow from '../Aboutpage/Grow'
import Statement from './Statement'
import Core from './Core'
import Team from './Team'
import JoinNow from './JoinNow'
import Footer from '../Footer'
import Navbar from '../Navbar'


function Aboutpage() {
  return (
    <div>
        <Navbar/>
        <Mission/>
        <Grow/>
        <Statement/>
        <Core/>
        <Team/>
        <JoinNow/>
        <Footer/>      
    </div>
  )
}

export default Aboutpage
