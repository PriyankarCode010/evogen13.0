import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import fake from "@/Images/fakephotos.webp";


const testimonials = [
  {
    id: "1",
    link :"./Images/grp/grp_1.jpg",
  },
  {
    id: "2",
    link :"./Images/grp/grp_2.jpg",
  },
  {
    id: "3",
    link :"./Images/grp/grp_3.jpg",
  },
  {
    id: "4",
    link :"./Images/fakephotos.webp",
  },
  {
    id: "5",
    link :"./Images/fakephotos.webp",
  },
  {
    id: "6",
    link :"./Images/fakephotos.webp",
  },
  {
    id: "7",
    link :"./Images/fakephotos.webp",
  },
];


type Props = {
  
}

const PhotoCard = (props: Props) => {
  return (
    <div className="bg-black py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <h1 className='text-red-600 font-extrabold text-4xl sm:text-6xl lg:text-8xl mb-8 sm:mb-12 text-center'>The Story of Evogen</h1> 
        <div className="sm:max-w-screen-lg mx-auto">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default PhotoCard;