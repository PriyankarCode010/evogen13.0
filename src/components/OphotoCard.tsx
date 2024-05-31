import React from 'react'
import { Fade } from 'react-awesome-reveal'


type Props = {
  name : string
  phno : number
  photo : string 
}

const OphotoCard = (props: Props) => {

  console.log(props.photo);
  return (
    <>
      <Fade direction='left'>
        <div className="relative h-[400px] w-[300px] rounded-lg shadow-xl shadow-[#0008]">
          <img
            src={props.photo}
            alt="Photo"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{props.name}</h1>
            <p className="mt-2 text-sm text-gray-300">
              Ph.no: {props.phno || ''}
            </p>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default OphotoCard