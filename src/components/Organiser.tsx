"use client";
import React, { useState } from "react";
import OphotoCard from "./OphotoCard";

type Person = {
  name: string;
  phno: string; 
  photo: string;
};

type Props = {
  faculty: Person[];
  heads: Person[];
};

const Organiser = ({ faculty, heads }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`pt-10 flex flex-col text-red-700 justify-center items-center border-b-2 border-red-800 ${show ? "bg-white" : "bg-black"}`}>
      {show ? (
        <div className="flex flex-col gap-14 justify-center items-center bg-white">
          <h2 className="text-4xl md:text-7xl font-bold text-center textShwd">
            Faculty Co-ordinator
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-10 w-full">
            {faculty.map((fac, index) => (
              <OphotoCard key={index} name={fac.name} phno={fac.phno} photo={fac.photo}/>
            ))}
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-center textShwd">
            Event Heads
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-10 w-full">
            {heads.map((head, index) => (
              <OphotoCard key={index} name={head.name} phno={head.phno} photo={head.photo}/>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <button className="h-14 w-28 my-10 text-white bg-red-700 rounded-lg hover:bg-red-600" onClick={() => setShow(!show)}>
        {show ? "show less" : "show more"}
      </button>
    </div>
  );
};

export default Organiser;
