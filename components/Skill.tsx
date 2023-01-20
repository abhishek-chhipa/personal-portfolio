import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function Skill({}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        className="rounded-full object-cover border border-gray-500 w-24 h-24 md:h-28 md:w-28 xl:h-32 xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full">
        <div className="flex items-center justify-center h-full ">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
