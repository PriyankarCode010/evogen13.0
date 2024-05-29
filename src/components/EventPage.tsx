"use client";
import eventsData from '@/data/eventsData';
import eventBg from '@/data/eventBg';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import { MdArrowBackIosNew } from "react-icons/md";
import About from '@/components/About';
import Organiser from '@/components/Organiser';
import { useEffect } from 'react';

type Props = {
    id: string;
};

const EventPage = (props:Props) => {

  const router = useRouter();

  const selectedEvent = eventsData.find(event => event.id === props.id);
  const bgImg = eventBg.find(bg => bg.id === props.id);

  useEffect(() => {
    if (!selectedEvent) {
      router.push('/404');
    }
  }, [selectedEvent, router]);

  if (!selectedEvent) {
    return(
      <div className="h-screen bg-black"></div>
    );
  }

  const { description, faculty, heads,rules,logo,bg } = selectedEvent;

  return (
    <>
       <nav className="h-12 absolute m-4 md:m-8 z-40">
        <button
          className="bg-red-600 px-4 py-2 rounded-lg text-white font-bold text-lg md:text-xl flex justify-center items-center"
          onClick={() => router.back()}
        >
          <div className="pr-2 text-2xl md:text-3xl">
            <MdArrowBackIosNew />
          </div>
          <div>Home</div>
        </button>
      </nav> 
      <div className='pb-5 bg-black'>
        <div
          className='flex flex-col justify-center items-center h-screen'
          style={{ backgroundImage: `url(${bg?.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
          <h1 className='text-center font-extrabold md:text-7xl text-5xl text-red-600 p-7 shadoww'>
            {selectedEvent.name}
          </h1>
          <p className='text-2xl font-semibold text-red-800 shadoww text-center shadoww bg-[#0005] px-2'>
            {selectedEvent.tagline}
          </p>
        </div>
        <hr />
        <div className='flex justify-center p-3'>
          <About rules={rules} description={description} logo={logo} />
        </div>
      </div>
      <div>
        <Organiser faculty={faculty} heads={heads} />
      </div>
      <Footer />
    </>
  );
};

export default EventPage;
