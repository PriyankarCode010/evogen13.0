import React from 'react'

type Props = {}

const Previouswinner = (props: Props) => {
  return (
    <div className='bg-black'>
      <div className='py-16 px-4 md:py-32 md:px-20 lg:px-40 flex flex-col gap-16 md:gap-32'>
        <div className="flex flex-col justify-center item-center gap-8 border-b-2 md:border-x-2 border-red-700">
          <h1 className="text-red-600 text-3xl md:text-4xl lg:text-6xl font-extrabold flex justify-center">About</h1>
          <div className="px-0 md:px-52">
            <p className="text-white text-sm md:text-lg lg:text-lg text-justify">
              Evogen is a platform for students to showcase and hone their skills in various technical activities like analysis of problems, software development, cyber security and games related to IT. The event is conceptualized and designed in such a way that it promotes personality development, entrepreneurship and technical skills among the students. With challenges more exciting, with interactions more inspiring, with concepts more ingenious and most importantly, with a festival more of fun, this edition of Evogen will unleash the treasure hidden in <span className="text-extraabold">YOU</span>.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse sm:flex-row-reverse gap-8'>
          <div className='flex-1 flex justify-center items-center'>
            <img
              src="./Images/evogen_12.jpeg"
              alt="Winner"
              className='object-cover'
              width={600}
              height={200}
            />
          </div>
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-red-600 text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8'>Evogen 12.0</h1>
            <div className='text-white text-sm md:text-base lg:text-lg'>
              Last year&apos;s fest, was a resounding success, filled with vibrant energy and diverse activities. The festivity featured a wide array of events. The winners were recognized for their outstanding talents and hard work, leaving a lasting impression on everyone present. The fest not only provided a platform for showcasing skills but also fostered camaraderie and community spirit. We look back on last year&apos;s fest with pride and look forward to continuing this tradition of excellence.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Previouswinner