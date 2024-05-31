"use client";
import { MdArrowBackIosNew } from "react-icons/md";
import Image from 'next/image';
import { Boxes } from '@/components/ui/background-boxes';
import { useRouter } from 'next/navigation';

const Users = () => {

    const router = useRouter();

  return (
    <div className="relative scrollbar scrollbar-track-black">
      <nav className="h-12 absolute m-4 md:m-8 z-40">
        <button
          className="bg-red-600 px-4 py-2 rounded-lg text-white font-bold text-lg md:text-xl flex justify-center items-center"
          onClick={() => {
            router.replace("/");
          }}
        >
          <div className="pr-2 text-2xl md:text-3xl">
            <MdArrowBackIosNew />
          </div>
          <div>Home</div>
        </button>
      </nav>
      <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="relative z-50 text-center">
          <h2 className="text-red-600 text-3xl md:text-5xl font-bold p-4">Who&apos;s watching</h2>
          <div className="flex flex-wrap justify-center gap-4 p-5">
            <div className="flex flex-col items-center">
              <div onClick={() => { router.replace("event"); }} className="cursor-pointer">
                <img src="./Images/blue.png" alt="blue" width={96} height={96} className="hover:scale-110 duration-300" />
              </div>
              <span className="text-white text-center font-semibold text-lg md:text-xl">User 1</span>
            </div>
            <div className="flex flex-col items-center">
              <div onClick={() => { router.replace("event"); }} className="cursor-pointer">
                <img src="./Images/red.png" alt="red" width={96} height={96} className="hover:scale-110 duration-300" />
              </div>
              <span className="text-white text-center font-semibold text-lg md:text-xl">User 2</span>
            </div>
            <div className="flex flex-col items-center">
              <div onClick={() => { router.replace("event"); }} className="cursor-pointer">
                <img src="./Images/yellow.png" alt="yellow" width={96} height={96} className="hover:scale-110 duration-300" />
              </div>
              <span className="text-white text-center font-semibold text-lg md:text-xl">User 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users;