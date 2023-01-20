import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1.2 }}
    className=' relative h-screen overflow-hidden flex flex-col text-left md:flex-row max-w-full items-center justify-center mx-auto px-10'>
       <h3
        className="absolute top-10 uppercase tracking-[20px]
       text-gray-500 text-2xl"
      >
        Experience
      </h3>
      <div className='w-full mx-auto flex items-center justify-center space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory '>
        <ExperienceCard />
        {/* <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard /> */}
        
      </div>
        </motion.div>
  )
}