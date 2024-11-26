import React from 'react'
import { motion } from "framer-motion"
import { Skill as Skillbg} from '../typings'
import { urlFor } from '@/sanity';

type Props = {
    skill:  Skillbg;
    directionLeft?: boolean;
}

function Skill({skill, directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
    <motion.img
    initial={{
        x: directionLeft ? -100:100,
        opacity:0
    }}
    transition={{duration:1.2}}
    whileInView={{x:0, opacity:1}}
    src={urlFor(skill?.image).url()}
    className='rounded-full border border-gray-500 object-cover w-24 h-24 filter group-hover:grayscale transition duration-300 ease-in-out' />

    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
        </div>
    </div>
    
    </div>
  )
}

export default Skill