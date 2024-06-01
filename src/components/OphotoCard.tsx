import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { FaInstagram } from "react-icons/fa6";
import Link from 'next/link';

type Props = {
  name: string
  phno: string
  photo: string 
  ig: string
}

const OphotoCard = (props: Props) => {
  const hPhotos = "." + props.photo;

  return (
    <>
      <Fade direction='left'>
        <div className="relative h-[400px] w-[300px] rounded-lg shadow-xl shadow-[#0008]">
          <img
            src={hPhotos}
            alt="Photo"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{props.name}</h1>
            <p className="mt-2 text-sm text-gray-300">
              {props.phno || ''}
            </p>
          </div>
          {props.ig ? (
            <div 
              className="absolute bottom-4 right-4 cursor-pointer" 
              onClick={() => window.open(props.ig, '_blank', 'noopener,noreferrer')}
            >
              <FaInstagram className="text-white text-2xl hover:text-red" />
            </div>
          ) : null}
        </div>
      </Fade>
    </>
  );
}

export default OphotoCard;
