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
          <input value={result}  type="text" className='w-full border-[1px] text-right border-black/30 py-4 px-2'/>
        </div>
        <div className='flex flex-wrap gap-x-[40px] gap-y-4 px-5'>
            <button onClick={()=>{setResult("")}} className='w-8'>AC</button>
            <button onClick={handleBack} className='w-8'>--b</button>
            <button onClick={handleClick} className='w-8'>%</button>
            <button name='/' onClick={handleClick} className='w-8'>/</button>
            <button name='7' onClick={handleClick} className='w-8'>7</button>
            <button name='8' onClick={handleClick} className='w-8'>8</button>
            <button name='9' onClick={handleClick} className='w-8'>9</button>
            <button name='*' onClick={handleClick} className='w-8'>X</button>
            <button name='4' onClick={handleClick} className='w-8'>4</button>
            <button name='5' onClick={handleClick} className='w-8'>5</button>
            <button name='6' onClick={handleClick} className='w-8'>6</button>
            <button name='-' onClick={handleClick} className='w-8'>-</button>
            <button name='1' onClick={handleClick} className='w-8'>1</button>
            <button name='2' onClick={handleClick} className='w-8'>2</button>
            <button name='3' onClick={handleClick} className='w-8'>3</button>
            <button name='+' onClick={handleClick} className='w-8'>+</button>
            <button name='.' onClick={handleClick} className='w-8'>.</button>
            <button name='0' onClick={handleClick} className='w-8'>0</button>
            <button name='.' onClick={handleClick} className='w-8'>.</button>
            <button onClick={handleResult} className='w-8'>=</button>

        </div>
      </div>
    </div>
  )
}

export default App