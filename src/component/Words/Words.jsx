import React, {useState, useEffect} from 'react'
import row from '../photos/pattern-divider-desktop.svg'
import btn from '../photos/icon-dice.svg'

function Words() {
    
  return (
    <div className='bg-gray-950 flex items-center h-[100vh]  justify-center'>
      <div className='bg-gray-600 lg:w-[35%] sm: w-[80%] h-[50vh] flex flex-col items-center rounded-[15px] justify-between'>
        <h2 className='text-green-500 font-bold mt-2'>Advice #117</h2>
        <div className='w-[75%] flex items-center justify-center text-gray-300 h-[20vh]'>
          <h1></h1>
        </div>
        <div><img src={row} alt="" /></div>
        <button className='bg-green-300 p-4 rounded-[25px] mb-[-20px]'>         
            <img src={btn} alt="" />        
        </button>
      </div>
      
    </div>
  )
}

export default Words
