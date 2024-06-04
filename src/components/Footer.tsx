import React from 'react'
import { LuMountain } from "react-icons/lu";
import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";


type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="relative bg-black py-6 px-4 md:px-6 flex items-center justify-between text-red-600">
        <div className="flex items-center gap-2">
          <LuMountain  className="h-6 w-6" />
          <p className="text-lg md:text-lg">&copy; 2024 Evogen BCA. All Rights Reserved.</p>
        </div>
        <nav className="flex items-center gap-4">
        <div 
         className="absolute bottom-4 right-4 cursor-pointer" 
         onClick={() => window.open("https://www.instagram.com/gcc_bca", '_blank', 'noopener,noreferrer')}
        ><FaInstagram className="text-xl" /></div>
        {/* <div onClick={() => window.open("https://www.instagram.com/gcc_bca", '_blank', 'noopener,noreferrer')}><FaSquareFacebook className="text-lg" /></div> */}
        </nav>
      </footer>
  )
}

export default Footer



