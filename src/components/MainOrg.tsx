"use client";
import React, { useState } from "react";
import MphotoCard from "./MphotoCard";
import data from '@/data/main.js';
import Link from 'next/link';

type Props = {};

const MainOrg = (props: Props) => {
  const main = data.find(event => event.id === "main")
  const eventorg = data.find(event => event.id === "eventorg")
  const studorg = data.find(event => event.id === "studorg");
  const dev = data.find(event => event.id === "dev");
  const [show, setShow] = useState(false);

  if (!main || !eventorg || !studorg || !dev) {
    return <div>Data not found</div>;
  }

  return (
    <div className={`text-white pt-10 flex flex-col justify-center items-center border-b-2 border-red-800 ${show ? "bg-white" : "bg-black"} `}>
      {show ? (
        <div className="flex flex-col gap-14 justify-center items-center bg-white">
          <h2 className="text-4xl md:text-7xl font-bold text-center textShwd text-red-700 uppercase">
            Organizing Committee
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-10 w-full">
            {main.ppl.map((fac, index) => (
              <MphotoCard key={index} name={fac.name} role={fac.role} photo={fac.photo} />
            ))}
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-center textShwd text-red-700 uppercase">
            Event Co-ordinators
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-10 w-full">
            {eventorg.ppl.map((fac, index) => (
              <MphotoCard key={index} name={fac.name} role={fac.role} photo={fac.photo} />
            ))}
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-center textShwd text-red-700 uppercase">
            Student Co-ordinators
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-10 w-full">
            {studorg.ppl.map((fac, index) => (
              <MphotoCard key={index} name={fac.name} role={fac.role} photo={fac.photo} />
            ))}
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-center textShwd text-red-700 uppercase">
            Developer
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-10 w-full">
            {dev.ppl.map((head, index) => (
              <MphotoCard key={index} name={head.name} role={head.role} photo={head.photo} />
            ))}
          </div>
          <div onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSc21gQOpL5ty7dMNeBXtytuZSzqsfM1rFmhgz5jHCibRbHVBQ/closedform", '_blank', 'noopener,noreferrer')} className="px-5 py-2 rounded-md bg-red-600 text-white text-2xl hover:bg-red-500 cursor-pointer">Register</div>
        </div>
      ) : (
        <div></div>
      )}
      <button className="h-14 w-28 my-10 bg-red-700 rounded-lg hover:bg-red-600" onClick={() => setShow(!show)}>
        {show ? "show less" : "show more"}
      </button>
    </div>
  );
};

export default MainOrg;
