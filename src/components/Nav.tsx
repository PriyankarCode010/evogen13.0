import React from 'react'
type Props = {

}
const Nav = (props: Props) => {
  return (
    <div className=' w-screen flex'>
        <div className='flex-1 flex items-center'>
      <div className='h-24 w-24 flex items-center p-3 md:p-2'>
        <img src="./Images/Kls_Gcc_logo__1.png" alt="" className='ml-0 md:ml-3'/>
      </div>
    </div>
    <div className='flex-grow'>
      <span className='text-xs md:text-xl'>Karnatak Law Society&apos;s</span>
        <br />
      <span className='font-semibold text-xs md:text-2xl'>Gogte College of Commerce</span>
        <br />
      <span className='font-bold text-xs md:text-2xl'>Bachelor of Computer Applications</span>
        <br />
      <span className='font-thin text-xs'>Presents</span>
    </div>
    <div className='flex-1 flex justify-end items-center'>
      <div className='h-24 w-24 flex justify-end items-center p-3 md:p-2'>
        <img src="./Images/KLS GCC BCA - Logo.jpg" alt="" className='mr-0 md:mr-3' />
      </div>
    </div>
    </div>
  )
}

export default Nav