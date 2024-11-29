'use client';

import React from 'react'
import { motion } from "framer-motion"
import { Project } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  projects: Project[];
}

function Projects({projects}: Props) {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration: 1.5}} className='h-[150vh] flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-500/20 scrollbar-thumb-[#F7AB0A]/80 '>
           {projects?.map((project,i) => (
            <div key={project._id} className='w-[150vw] sm:w-[125vw] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-30 md:p-44 h-screen'>
                <motion.img initial={{y:-300}} transition={{duration: 1.2}} whileInView={{opacity:1 , y:0}} viewport={{once:true}} src={urlFor(project?.image).url()} alt="" className="w-48 h-auto md:w-80"/>

                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>Case study {i+1} of {projects.length}: {project?.title}</h4>

                <div className='flex items-center space-x-2 justify-center'>
                    {project?.technologies.map(technology => (
                      <img className='w-10 h-10' key={technology._id} src={urlFor(technology.image).url()} alt="" />
                    ))}
              </div>
                    <p className='text-lg text-center md:text-left p-20 md:p-0'>{project?.summary}</p>
                  <div className='w-full flex items-center justify-center p-7'>
                    <a href={project?.linkToBuild}><button className='bg-[#F7AB0A] px-10 py-4 rounded-md text-lg text-black font-bold'>Visit</button></a>
                    </div>
                </div>
            </div>
           ))}
        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
