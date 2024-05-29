"use client";
import React from 'react'
import { MdDownload } from 'react-icons/md';
//import logo from "/Images/netflixlogo.webp"
import { useRouter } from 'next/navigation';

type Props = {}

const Intro = (props: Props) => {

  const router = useRouter();

  return (
  <>
  <div className='flex text-white z-10 text-center w-full absolute translate-x-[-0%] bg-[#0006] py-2 justify-center'>
    <div className='flex-1 flex items-center'>
      <div className='h-24 w-24 flex items-center p-3 md:p-2'>
        <img src="./Images/Kls_Gcc_logo__1.png" alt="" className='ml-0 md:ml-3'/>
      </div>
    </div>
    <div className='flex-grow'>
      <span className='text-xs md:text-xl'>The Karnatak Law Society&apos;s</span>
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
    <div className="flex flex-col justify-center items-center w-full h-screen video-container">
      <video autoPlay loop muted className="video-bg absolute">
        <source src='./Images/newbgvideo.mp4'/>
      </video>
      <div className='flex flex-col justify-center items-center w-full h-screen translate-x-[-0%] bg-[#0009]'></div>
      <div className='z-40 flex flex-col items-center absolute'>
        <img src="./Images/EVOGEN.png" alt="" width={500} height={500} className="p-3"/>
        <div className='p-2 flex flex-col gap-10 md:flex-row'>
        <a href='/MAGNUM_2024.pdf' download={"Brochure"} >
      <button className='flex justify-center items-center pr-4 bg-red-600 px-4 py-2 rounded-md text-2xl text-white hover:bg-red-700'><MdDownload className='text-5xl px-2' />Brochure</button>
      </a>  
          <button className="bg-red-600 px-4 py-2 rounded-md text-2xl text-white hover:bg-red-700" onClick={()=>{router.push("users");}}>Watch now</button>
        </div>
      </div>
    </div>
  </>
  )
}
export default Intro;

{/* <div className='flex left-8 py-1 px-3 fixed z-10 bg-red-600 text-whites top-10'>
      
</div> */}