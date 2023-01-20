import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center flex-shrink-0 
    h-[650px] w-[400px] md:w-[500px] xl:w-[600px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-[8rem] '>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img 
        initial={{ 
            y:-100,
            opacity:0
         }}
         transition={{ duration:1.2 }}
         whileInView={{ y:0,opacity:1 }}
         viewport={{ once:true }}
        className='w-24 h-24 xl:w-[200px] xl:h-[200px] rounded-full object-cover object-center mt-5'
        src="https://media.licdn.com/dms/image/C4D03AQFeJcHlNbQV-A/profile-displayphoto-shrink_800_800/0/1656331006903?e=1679529600&v=beta&t=MxOZhB2ISnDazjIbMcpK35Z4Vdu_3uLX_tYgdcGy7TU" alt="img" />
        <div className=' flex flex-col px-0 items-center md:px-10 '>
            <h4 className='text-4xl font-light'>SDE Trainee</h4>
            <p className="text-2xl mt-1">INFRRD.ai</p>
            <div className="flex space-x-2 my-2">
                {/* tech used icons */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className='h-10 w-10 rounded-full' src="../public/next.svg" alt="" />
            </div>
            <p className='uppercase my-2 text-gray-300'>
                started...-ended...
            </p>
            <ul className='list-disc space-y-3 ml-5 w-[350px] pb-5 text-lg mx-auto'>
                <li>summary points Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolorem.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vitae unde mollitia commodi illum quasi ut dicta eum ullam labore.</li>
            </ul>
        </div>
    </article>
  )
}