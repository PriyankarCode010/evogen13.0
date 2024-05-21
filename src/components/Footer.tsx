import React from 'react'
import Link from 'next/link';
import { LuMountain } from "react-icons/lu";


type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-black py-6 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LuMountain  className="h-6 w-6 text-red-600" />
          <p className="text-sm text-red-600 ">© 2024 Acme Inc. All rights reserved.</p>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            className="text-sm text-red-600 hover:text-red-500"
            href="#"
          >
            Terms
          </Link>
          <Link
            className="text-sm text-red-600 hover:text-red-500"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
  )
}

export default Footer



