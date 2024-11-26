'use client';
export const revalidate = 10;

import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link'
import {PageInfo} from "../typings";
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo;
  }
  
export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi, The Name's ${pageInfo?.name}`,"Guy-who-loves-chiya.tsx", "<ButLovesToDesignMore />"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-[150vh] flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img src={urlFor(pageInfo?.heroImage).url()} alt='my-pic' className='relative rounded-full h-32 w-32 mx-auto object-cover'/>

        <div className='z-20 '>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3 '>{text}</span>
            <Cursor cursorColor='#f7ab0a' />
        </h1>

        <div className='pt-5'>
            <Link href="#about"><button className='heroButton'>About</button></Link>
            <Link href="#experience"><button className='heroButton'>Experience</button></Link>
            <Link href="#skills"><button className='heroButton'>Skills</button></Link>
            <Link href="#projects"><button className='heroButton'>Projects</button></Link>
            
            
        </div>
        </div>
        
    </div>
  )
}