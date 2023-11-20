import React from 'react'

function App() {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-blue-600'>
      <div className='w-[350px] bg-white py-24'>
        <div className='w-full pb-10'>
          <input type="text" className='w-full border-[1px] border-black/30 py-4 px-2'/>
        </div>
        <div className='flex justify-between px-4 mt-5'>
         <div className='w-9/12'>
          <ul className='flex  flex-wrap gap-y-4'>
            <li className='w-4/12'>AC</li>
            <li className='w-4/12'>AC</li>
            <li className='w-4/12'>%</li>
            <li className='w-4/12'>7</li>
            <li className='w-4/12'>8</li>
            <li className='w-4/12'>9</li>
            <li className='w-4/12'>4</li>
            <li className='w-4/12'>5</li>
            <li className='w-4/12'>6</li>
            <li className='w-4/12'>1</li>
            <li className='w-4/12'>2</li>
            <li className='w-4/12'>3</li>
          </ul>
         </div>
         <div className='w-2/12'>sadf</div>
        </div>
      </div>
    </div>
  )
}

export default App