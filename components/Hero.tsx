import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi , The Name's Abhishek Chhipa",
      "The-Guy-Who-Loves-Coffee.tsx",
      "<But Loves To Code More/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      
      
      {/* circles */}
      <BackgroundCircles />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/C4D03AQFeJcHlNbQV-A/profile-displayphoto-shrink_800_800/0/1656331006903?e=1679529600&v=beta&t=MxOZhB2ISnDazjIbMcpK35Z4Vdu_3uLX_tYgdcGy7TU"
        alt="Landscape picture"
      />
      <div className="z-20">
        <h2 className="uppercase text-sm  text-gray-400 pb-2 tracking-[8px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
        {/* buttons */}
        <div className="pt-5">
          <Link href="#about">
          <button className="herobutton">About</button>
          </Link>

          <Link href="#experience">
          <button className="herobutton">Experience</button>
          </Link>

          <Link href="#skills">
          <button className="herobutton">Skills</button>
          </Link>

          <Link href="#projects">
          <button className="herobutton">Projects</button>
          </Link>

        </div>
      </div>
    </div>
  );
}
