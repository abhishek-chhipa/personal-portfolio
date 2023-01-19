import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration:1.2 }}
      className="flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl"
      >
        About
      </h3>

      <motion.img 
      initial={{ 
        x:-200,
        opacity:0

       }}
       transition={{ 
        duration:1.2
        }}
       whileInView={{ 
        opacity:1,
        x:0
        }}
       viewport={{ once:true }}
        src="https://media.licdn.com/dms/image/C4D03AQFeJcHlNbQV-A/profile-displayphoto-shrink_800_800/0/1656331006903?e=1679529600&v=beta&t=MxOZhB2ISnDazjIbMcpK35Z4Vdu_3uLX_tYgdcGy7TU"
        
        className="-mb-20 mt-5 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[400px]"
        />
        <div className="space-y-8 px-0 md:px-10 ">
            <h4 className="text-4xl font-semibold">
                Here&apos;s a little background
            </h4>
            <p className="text-base text-gray-300 text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione porro dignissimos mollitia odit rerum, natus sunt earum iure ex optio, vel corporis? Id labore culpa minus dicta voluptatibus laborum quod unde consectetur dolore consequuntur, amet accusamus, facilis dignissimos! Enim dignissimos minima eum explicabo perspiciatis vel aspernatur aliquam velit voluptatibus eveniet!
            </p>
        </div>
    </motion.div>
  );
}

export default About;
