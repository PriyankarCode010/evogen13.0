import React from 'react'
import Link from 'next/link'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className='h-screen flex flex-col justify-center items-center bg-black text-red-700'>
      <h1>404</h1>
      <Link href="/"><div className='text-white bg-red-700 px-3 py-2 hover:bg-red-600'>take me home :)</div></Link>
    </div>
  )
}

export default NotFound