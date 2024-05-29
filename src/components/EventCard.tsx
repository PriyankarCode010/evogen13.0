"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegHeart,FaHeart } from "react-icons/fa";

type Event = {
  id: string;
  name: string;
  logo: string;
  bg: string;
  description: string;
};

type EventCardProps = {
  event: Event;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {

  const [like,setLike] = useState(false)

  return (
    <>
      <div className="flex max-w-[85vw] flex-col items-center rounded-lg my-5 shadow-lg md:flex-row bg-gray-950 text-white">
        <div className="relative md:w-[55vw] flex-1 flex justify-center items-center border-b-2 border-slate-900 md:border-b-0 overflow-hidden">
          <img src={event.bg} alt="" className='absolute object-cover blur-[2px]'/>  
          <img
            src={event.logo}
            alt="Laptop"
            className=" h-80 w-80 p-4 rounded-md md:h-96 md:w-96 md:p-0 z-40"
          />
        </div>
        <div className='flex-[2]'>
          <div className="p-4 flex flex-col gap-5">
            <div className="items-center text-4xl font-semibold flex justify-between py-2">
              {event.name} <button className='pr-5' onClick={()=>setLike(!like)}><div>{like?<FaHeart  className='text-red-700 text-3xl'/>:<FaRegHeart className='text-3xl'/>}</div></button>
            </div>
            <h2 className='uppercase text-xl font-extrabold text-slate-400 pt-3'>{event.id}</h2>
            <p className="text-xl text-slate-500">
              {event.description}
            </p>
            <Link href={`/event/${event.id}`}>
              <button type="button" className="text-white bg-red-700 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-52">Read more</button>
            </Link>          
            </div>
        </div>
      </div>
    </>
  //bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:w-auto 
);
};

export default EventCard;