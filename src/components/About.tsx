import React from 'react'
import { Fade } from 'react-awesome-reveal';

type Props = {
    rules : string[]
}

const About = (props: Props) => {
  return (
    <div className='flex w-full flex-col p-8'>
      <div className="flex w-full flex-col rounded-lg my-5 shadow-lg md:flex-row border-2 border-slate-950 bg-black text-white">
        <div className="h-full w-full md:w-[55vw] flex-1">
          <img
            src="https://imgs.search.brave.com/9OLsPE5ZkKFoPdInsHuLmkmpSulfyR7f1veMx8qzK4o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vNDQyODg3/MS82NTY3MS9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzY1NjcxNzMz/OC1zdG9jay1waG90/by1kZW1vLWRlbW9u/c3RyYXRpb24tcHJv/ZHVjdC10ZWNobmlx/dWUtdGV4dC5qcGc"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className='flex-[2]'>
          <div className="p-4 flex flex-col gap-5">
            <h2 className='uppercase font-semibold text-slate-400'>About</h2>
            <p className="text-sm text-slate-500 break-words">
              description descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription 
            </p>      
            </div>
        </div>
      </div>
      <div className='mt-10 max-w-full flex flex-col gap-7 justify-center bg-black text-white rounded-lg'>
      <h2 className='text-5xl md:text-8xl font-bold textShwd pl-0 md:pl-10 '>Rules & Regulations</h2>
      <div className=' shadow-xl px-3 md:px-32'>
          <Fade direction='left' cascade>
              <ul className='list-disc md:text-2xl text-xl flex flex-col gap-5 w-[80vw] px-5 py-8'>
                  {props.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                  ))}
              </ul>
          </Fade>
      </div>
  </div>
  </div>
  )
}

export default About