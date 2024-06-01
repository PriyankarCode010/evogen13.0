"use client";
import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import eventsData from '@/data/eventsData';
import Link from 'next/link';

const WhatsNew = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -291, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 291, behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col my-10'>
      <h1 className='text-red-600 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold px-5'>What&apos;s New</h1>
      <div className='flex flex-row justify-center items-center'>
        <div className='left p-2'>
          <button 
            className="p-2 rounded-full bg-red-700 text-white hover:bg-red-600"
            onClick={scrollLeft}
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
        </div>
        <div className='overflow-y-hidden lg:overflow-x-hidden' ref={scrollContainerRef}>
          <div className='flex flex-row py-7'>
            {eventsData.map((event, index) => (
              <div key={index} className='flex-1 h-auto min-w-[291px] md:min-w-[430px] border-l-2 border-red-600'>
                <Link href={`/event/${event.id}`}><h1 className='text-3xl px-2 hover:underline underline-offset-1'>{event.name}</h1></Link>
                <p className='p-4 text-justify'>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='right p-2'>
          <button 
            className="p-2 rounded-full bg-red-700 text-white hover:bg-red-600"
            onClick={scrollRight}
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsNew;