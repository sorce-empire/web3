import React, { useState } from 'react'
import row from '../photos/pattern-divider-desktop.svg'
import btn from '../photos/icon-dice.svg'
import axios from 'axios'

function Generator() {
  const [resp, setResp] = useState([])
  const [loading, setLoading] = useState(false)
  const handleClick = async()=>{
    setLoading(true)
    const base_url  = "https://api.adviceslip.com/advice"

    // try {
    //   const response =  await fetch(base_url)
    //   const result = response.json()
    //   // console(result)
    //   if(result){
    //     setResp(result)
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
    try {
      const response =  await axios.get(base_url)
      const result = response.data.slip.advice
      if(result){
        setResp(result)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  console.log("<<<<<<<<<one>>>>>>>")
  console.log(resp)
  

  return (
    <div className='bg-gray-950 flex items-center h-[100vh]  justify-center'>
      <div className='bg-gray-600 lg:w-[35%] sm: w-[80%] h-[50vh] flex flex-col items-center rounded-[15px] justify-between'>
        <h2 className='text-green-500 font-bold mt-2'>Advice #117</h2>
        <div className='w-[75%] flex items-center justify-center text-gray-300 h-[20vh]'>
          <h1>{resp}</h1>
        </div>
        <div><img src={row} alt="" /></div>
        <button onClick={handleClick} className='bg-green-300 p-4 rounded-[25px] mb-[-20px]'>
          {
            loading ? 
            <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div> : <img src={btn} alt="" />
          }
        </button>
      </div>
      
    </div>
  )
}

export default Generator

