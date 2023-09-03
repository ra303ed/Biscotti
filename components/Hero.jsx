import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRightCircle, BsPlayCircle, BsArrowDownRight } from 'react-icons/bs';
import { RiLoaderFill } from 'react-icons/ri';
import { RxAlignRight } from 'react-icons/rx';
import { ImArrowDownRight2 } from 'react-icons/im';



const Hero = () => {
  return (
    <>
    <div className='bg-black/50 absolute top-0 bottom-0 left-0 right-0 z-[2] '/>
    <section className="text-gray-600 body-font bg-custom bg-center bg-cover bg-fixed h-screen md:flex-row flex-col  justify-center items-center flex ">
    <div className="container mx-auto flex xl:px-40 px-10 py-24 md:flex-row flex-col  justify-center items-center  z-10">
        <div className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center z-10">
        <h1 className="title-font md:text-4xl lg:text-7xl mb-4 font-bold text-white">Before they sold out
            <br className="hidden lg:inline-block"/>readymade gluten
        </h1>
        <p className="mb-8 text-white/60 leading-relaxed text-xl">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        <div className="flex justify-center">
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-white/10 ease-in-out duration-100 text-lg">Button</button>
        </div>
        </div>
        <div className="flex lg:max-w-lg  lg:w-full  md:w-1/2 sm:w-3/12 w-3/6 justify-end z-20">
        <Image className="object-cover bg-cover  object-center rounded-2xl "
        width={300}
        height={300}
        alt="hero" src={'https://images.unsplash.com/photo-1530738557605-d8c982b05e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'} />
        </div>
    </div>
    </section>
    </>
  )
}

export default Hero
