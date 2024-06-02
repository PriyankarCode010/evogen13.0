import Image from 'next/image'
import React from 'react'
//import winner from "@/Images/winners.webp";

type Props = {}

const Previouswinner = (props: Props) => {
  return (
    <div className='bg-black'>
      <div className='py-16 px-4 md:py-32 md:px-20 lg:px-40 flex flex-col gap-16 md:gap-32'>
        <div className='flex flex-col md:flex-row lg:flex-row sm:flex-row gap-8'>
          <div className='flex-1 flex justify-center items-center'>
            <img
              src="./Images/evogen_11.jpeg"
              alt="Winner"
              className='object-cover'
              width={600}
              height={200}
            />
          </div>
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-red-600 text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-8'>Evogen 11.0</h1>
            <div className='text-white text-sm md:text-base lg:text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel urna nec dui consectetur vulputate.
              Fusce vitae magna at sapien vehicula congue. Sed placerat, est eget volutpat malesuada, metus eros
              ullamcorper metus, nec mattis turpis risus et lectus. Nulla facilisi. Suspendisse potenti. Duis nec
              eros sed libero faucibus finibus. Mauris auctor, ligula sed pharetra sodales, justo risus consectetur
              ex, ac aliquet orci nunc vel lorem. Vivamus id turpis vitae odio accumsan vestibulum nec id felis.
            </div>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel urna nec dui consectetur vulputate.
              Fusce vitae magna at sapien vehicula congue. Sed placerat, est eget volutpat malesuada, metus eros
              ullamcorper metus, nec mattis turpis risus et lectus. Nulla facilisi. Suspendisse potenti. Duis nec
              eros sed libero faucibus finibus. Mauris auctor, ligula sed pharetra sodales, justo risus consectetur
              ex, ac aliquet orci nunc vel lorem. Vivamus id turpis vitae odio accumsan vestibulum nec id felis.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Previouswinner