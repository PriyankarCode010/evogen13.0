"use client";
import React, { useState } from "react";
import MphotoCard from "./MphotoCard";
import data from '@/data/main.js';

type Props = {};

const MainOrg = (props: Props) => {
  const main = data.find(event => event.id === "main");
  const dev = data.find(event => event.id === "dev");
  const [show, setShow] = useState(false);

  if (!main || !dev) {
    return <div>Data not found</div>;
  }

  return (
    <div className="bg-white text-white pt-10 flex flex-col justify-center items-center border-b-2 border-red-800">
      {show ? (
        <div className="flex flex-col gap-14 justify-center items-center bg-white">
          <h2 className="text-4xl md:text-7xl font-bold text-center textShwd">
            Co-ordinator
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-10 w-full">
            {main.ppl.map((fac, index) => (
              <MphotoCard key={index} name={fac.name} role={fac.role} photo={fac.photo} />
            ))}
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-center textShwd">
            College Representative
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-10 w-full">
            {main.ppl.map((fac, index) => (
              <MphotoCard key={index} name={fac.name} role={fac.role} photo={fac.photo} />
            ))}
          </div>

          <h2 className="text-4xl md:text-7xl font-bold text-center textShwd">
            Developer
          </h2>
          <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-10 w-full">
            {dev.ppl.map((head, index) => (
              <MphotoCard key={index} name={head.name} role={head.role} photo={head.photo} />
            ))}
          </div>
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
