"use client";
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegHeart,FaHeart } from "react-icons/fa";

type Event = {
  id: string;
  name: string;
  logo: string;
  description: string;
};

type EventCardProps = {
  event: Event;
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {

  const [like,setLike] = useState(false)

  return (
    <>
      <Fade direction='left'>
      <div className="flex max-w-[85vw] flex-col items-center rounded-lg my-5 shadow-lg md:flex-row bg-gray-950 text-white">
        <div className="h-full w-full md:w-[55vw] flex-1">
          <img
            src={event.logo}
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className='flex-[2]'>
          <div className="p-4 flex flex-col gap-5">
            <div className="items-center text-3xl font-semibold flex justify-between">
              {event.name} <button className='mx-5' onClick={()=>setLike(!like)}><div>{like?<FaHeart  className=' text-red-700'/>:<FaRegHeart />}</div></button>
            </div>
            <h2 className='uppercase font-semibold text-slate-400'>{event.id}</h2>
            <p className="text-sm text-slate-500">
              {event.description}
            </p>
            <Link href={`/event/${event.id}`}>
              <button type="button" className="text-white bg-red-700 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 md:w-52">Read more</button>
            </Link>          
            </div>
        </div>
      </div>
      </Fade>
    </>
  //bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:w-auto 
);
};

export default EventCard;