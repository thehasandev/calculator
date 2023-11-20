import React, { useState } from 'react'

function App() {
  const [result,setResult] =useState("")
  
  const handleResult =()=>{
    try{
      setResult(eval(result))
    }catch(err){
      setResult("Error")
    }
  }
  const handleClick =(e)=>{
    setResult(result.concat(e.target.name))
  }
  const handleBack =()=>{
    setResult(result.slice(0,-1))
  }


  return (
    <div className='flex justify-center items-center w-full h-screen bg-blue-600'>
      <div className='w-[340px] bg-white py-24'>
        <div className='w-full pb-10'>
          <input value={result}  type="text" className='w-full text-right outline-none py-4 px-2'/>
        </div>
        <div className='flex flex-wrap gap-x-[40px] gap-y-4 px-5 justify-center'>
            <button onClick={()=>{setResult("")}} className='w-10 text-orange-600 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>AC</button>
            <button onClick={handleBack} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>--b</button>
            <button onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>%</button>
            <button name='/' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>/</button>
            <button name='7' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>7</button>
            <button name='8' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>8</button>
            <button name='9' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>9</button>
            <button name='*' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>X</button>
            <button name='4' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>4</button>
            <button name='5' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>5</button>
            <button name='6' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>6</button>
            <button name='-' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>-</button>
            <button name='1' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>1</button>
            <button name='2' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>2</button>
            <button name='3' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>3</button>
            <button name='+' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>+</button>
            <button name='.' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>.</button>
            <button name='0' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>0</button>
            <button name='.' onClick={handleClick} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>.</button>
            <button onClick={handleResult} className='w-10 font-roboto text-base font-medium bg-white  h-10 rounded-full shadow-lg shadow-black/30'>=</button>

        </div>
      </div>
    </div>
  )
}

export default App