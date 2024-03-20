import React from 'react'
import Navbar from '../Navbar'
import Chain from './Chain'
import Events from './Events'
import JoinNow from '../Aboutpage/JoinNow'
import Footer from '../Footer'
function Event() {
  return (
    <div>
       <Navbar/>
       <Chain/>
       <Events/>
       <JoinNow/>
       <Footer/>
    </div>
  )
}

export default Event
