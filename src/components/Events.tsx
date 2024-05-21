"use client";
import EventCard from '@/components/EventCard';
import React, { useEffect, useState } from 'react';
import events from '@/data/eventsData';
import { MdArrowBackIosNew } from 'react-icons/md';
import { useRouter } from 'next/navigation';


const Events = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (isLoading) {
      "use server";
      return (
        <div className='h-screen bg-black'>
        <video autoPlay muted className="video-bg absolute">
          <source src='./Images/justevogen.mp4'/>
        </video>
      </div>
      );
    }
  
    return (
      <div className="h-screen bg-black">
        <div
          className="h-2/3 bg-[url('https://imgs.search.brave.com/VxgE_eNUyrua6soVH03hf9aYOfqnhDsEsERlE_w188w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbW92aWUtOXB2/bWR0dno0Y2IweGwz/Ny5qcGc')]"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
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
        </div>
        <h1 className="text-red-700 text-6xl font-extrabold px-6 sm:px-10 md:px-28 py-10 text-center">Events</h1>
        <div className="flex flex-wrap justify-center gap-6 px-4 md:px-10 lg:px-20 xl:px-32 bg-black">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    );
}

export default Events;