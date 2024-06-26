"use client";
import React from 'react'
import { MdDownload } from 'react-icons/md';
//import logo from "/Images/netflixlogo.webp"
import { useRouter } from 'next/navigation';
import Nav from './Nav';

type Props = {}

const Intro = (props: Props) => {

  const router = useRouter();

  return (
  <>
  <div className='flex text-white z-10 text-center w-full absolute translate-x-[-0%] bg-[#0006] py-2 justify-center'>
    <Nav/>
  </div>
    <div className="flex flex-col justify-center items-center w-full h-screen video-container">
      <video autoPlay loop muted className="video-bg absolute">
        <source src='./Images/newbgvideo.mp4'/>
      </video>
      <div className='flex flex-col justify-center items-center w-full h-screen translate-x-[-0%] bg-[#0009]'></div>
      <div className='z-40 flex flex-col items-center absolute'>
        <img src="./Images/EVOGEN.png" alt="" width={500} height={500} className="p-3"/>
        <div className='p-2 flex flex-col gap-10 md:flex-row'>
        <a href='./Images/Evogen_Brochure.pdf' download={"Brochure"} >
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