import React from 'react'
import Link from 'next/link'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className='relative'>
      <div className="h-screen flex flex-col justify-center items-center bg-[url('/Images/first_404.jpg')] bg-cover bg-no-repeat">
      <div className='flex flex-col justify-center items-center w-full h-screen translate-x-[-0%] bg-[#0009]'></div>
        <div className='absolute h-screen w-full'>
        <nav>
          <img src="./Images/EVOGEN.png" alt="LOGO" 
          width={200}
          height={200}  
          />
        </nav>
          <img src="./Images/four04.png" alt="logo" 
          width={300}
          height={300}
        />
          <Link href="/"><div className='text-white bg-red-700 px-3 py-2 hover:bg-red-600'>take me home</div></Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound