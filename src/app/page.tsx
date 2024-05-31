"use client";
import Footer from "@/components/Footer";
import { useEffect } from 'react';
import Intro from "@/components/Intro";
import MainOrg from "@/components/MainOrg";
import PhotoCard from "@/components/PhotoCard";
import Previouswinner from "@/components/Previouswinner";
import WhatsNew from "@/components/WhatsNew";

export default function Home() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 2550);
  }, []);

  return (
    <div className="select-none">
      <Intro/>
      <PhotoCard/>
      <WhatsNew/>
      <Previouswinner/>
      <MainOrg/>
      <Footer/>
    </div>
  );
}
