import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';


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
    link :"./Images/grp/grp_4.jpg",
  },
  {
    id: "5",
    link :"./Images/grp/grp_5.jpg",
  },
  {
    id: "6",
    link :"./Images/grp/grp_6.jpg",
  },
  {
    id: "7",
    link :"./Images/grp/grp_7.jpg",
  },
  {
    id: "8",
    link :"./Images/grp/grp_8.jpg",
  },
  {
    id: "9",
    link :"./Images/grp/grp_9.jpg",
  },
  {
    id: "10",
    link :"./Images/grp/grp_10.jpg",
  },
  {
    id: "11",
    link :"./Images/grp/grp_11.jpg",
  },
  {
    id: "12",
    link :"./Images/grp/grp_12.jpg",
  },
  {
    id: "13",
    link :"./Images/grp/grp_13.jpg",
  },
  {
    id: "14",
    link :"./Images/grp/grp_14.jpg",
  },
  {
    id: "15",
    link :"./Images/grp/grp_15.jpg",
  },
  {
    id: "16",
    link :"./Images/grp/grp_16.jpg",
  },
  {
    id: "17",
    link :"./Images/grp/grp_17.jpg",
  },
  {
    id: "18",
    link :"./Images/grp/grp_18.jpg",
  },
  {
    id: "19",
    link :"./Images/grp/grp_19.jpg",
  },
  {
    id: "20",
    link :"./Images/grp/grp_20.jpg",
  },
  {
    id: "21",
    link :"./Images/grp/grp_21.jpg",
  },
  {
    id: "22",
    link :"./Images/grp/grp_22.jpg",
  },
  {
    id: "23",
    link :"./Images/grp/grp_23.jpg",
  },
  {
    id: "24",
    link :"./Images/grp/main.jpg",
  },
];


type Props = {
  
}

const PhotoCard = (props: Props) => {
  return (
    <div className="bg-black py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <h1 className='text-red-600 font-extrabold text-4xl sm:text-6xl lg:text-8xl mb-8 sm:mb-12 text-center'>The Story of Evogen 13.0</h1> 
        <div className="w-full sm:max-w-screen-lg mx-auto">
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