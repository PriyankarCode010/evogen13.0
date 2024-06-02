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

const EventPage = ({ id }: Props) => {
  const router = useRouter();

  const selectedEvent = eventsData.find(event => event.id === id);

  useEffect(() => {
    if (!selectedEvent) {
      router.push('/404');
    }
  }, [selectedEvent, router]);

  if (!selectedEvent) {
    return (
      <div className="h-screen bg-black"></div>
    );
  }

  const { description, faculty, heads, rules, logo, bg } = selectedEvent;
  const bglogo = "."+bg;

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
      <div className="pb-5 bg-black">
        <div className="relative flex flex-col justify-center items-center h-screen overflow-hidden">
            <img src={bglogo} alt="" className="object-cover h-full w-full absolute blur-[3px]"/>
            <div className="absolute h-full w-full translate-x-[-0%] bg-[#0006] "></div>
            <div className="z-40 b">
          <h1 className="text-center font-extrabold md:text-8xl text-5xl text-red-600 p-7">
            {selectedEvent.name}
          </h1>
          <p className="text-2xl md:text-4xl font-semibold text-red-700 text-center px-2">
            {selectedEvent.tagline}
          </p>
          </div>
        </div>
        <hr />
        <div className="flex justify-center p-3 gap-2">
          <About rules={rules} description={description} logo={logo} />
          <div className="px-5 py-2 rounded-md bg-red-600 text-white text-2xl hover:bg-red-500">Register</div>
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
