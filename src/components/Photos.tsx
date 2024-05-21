import React from 'react'
import styles from "@/components/ui/Photo.module.css";
import Image from 'next/image';

type Props = {}

const Photos = (props: Props) => {
  return (
    <>
      <div className={styles.yoda}>
      <Image className={styles.logo} src="https://assets.codepen.io/308367/yoda-logo.webp" alt="" />
      <Image className={styles.frontimage} src="https://assets.codepen.io/308367/yoda-front.png" alt="yoda holding his lightsabre up, the glow highlighting an angry look on his face" />
      <Image className={styles.bgimage} src="https://assets.codepen.io/308367/yoda-on-dagobah.jpg" alt="yoda looking peaceful on dagobah" />

      <span className="inspiration block text-center font-serif text-sm text-gray-500 mt-6">Inspired by <a className="text-blue-500 hover:underline" href="https://codepen.io/gayane-gasparyan/details/wvxewXO">this CodePen by Gayane Gasparyan</a></span>
      
      <a className="yt block text-center text-blue-500 hover:underline mt-2" href="https://youtu.be/DCRcFf39SYo">
        Watch the tutorial
      </a>
    </div>
    </>
  )
}

export default Photos;