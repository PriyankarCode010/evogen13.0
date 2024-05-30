import React from 'react'
import Link from 'next/link'

type Props = {}

const NotFound = (props: Props) => {
  return (
      <div className='flex flex-col justify-center items-center w-full h-screen overflow-hidden'>
        <div className=' h-screen w-full bg-black'>
          <nav className='absolute w-full bg-black p-5 border-b-2'>
            <img 
            src="./Images/EVOGEN.png" 
            alt="LOGO" 
            className=''
            width={200}
            height={200}  
            />
          </nav>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='flex justify-between items-center text-white gap-0 md:gap-10'>
              <img 
              className='h-52 w-52 p-2 md:h-96 md:w-96'
              src="./Images/four04.png" 
              alt="logo" 
              />
              <h1 className='text-6xl md:text-8xl'>404</h1>
            </div>
          <Link href="/"><div className='text-white bg-red-700 px-3 py-2 hover:bg-red-600'>take me home</div></Link>
          </div>
        </div>
      </div>
  )
}

export default NotFound