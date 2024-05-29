import React, { useEffect } from 'react';

type Props = {
  description: string;
  rules: string[];
  logo: string;
};

const About = (props: Props) => {
  
  useEffect(() => {
    console.log("Image URL:", props.logo);
  }, [props.logo]);

  return (
    <div className='flex w-full flex-col p-8'>
      <div className="flex w-full flex-col rounded-lg my-5 shadow-lg md:flex-row border-2 border-slate-950 bg-black text-white">
        <div className="h-full w-full md:w-[55vw] flex-1">
          <img
            src={props.logo}
            alt="Description Logo"
            className="h-full w-full rounded-md object-cover"
            onError={(e) => { e.currentTarget.src = '/path/to/placeholder/image.png'; }}
          />
        </div>
        <div className='flex-[2]'>
          <div className="p-4 flex flex-col gap-5">
            <h2 className='uppercase text-5xl font-semibold text-slate-300 py-5'>About</h2>
            <p className="text-3xl text-slate-500 break-words">
              {props.description}
            </p>
          </div>
        </div>
      </div>
      <div className='mt-10 max-w-full flex flex-col gap-7 justify-center bg-black text-white rounded-lg'>
        <h2 className='text-5xl md:text-8xl font-bold textShwd pl-0 md:pl-10'>Rules & Regulations</h2>
        <div className='shadow-xl px-3 md:px-32'>
          <ul className='list-disc md:text-2xl text-xl flex flex-col gap-5 w-[80vw] px-5 py-8'>
            {props.rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
