import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-gray-50 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.1]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-gray-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[90vw] md:max-w-3xl lg:max-w-[80vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-sm md:text-base lg:text-sm text-center whitespace-nowrap text-indigo-200 max-w-full">
            Full Stack MERN Developer  |  Java  |  DSA
          </p>

          <TextGenerateEffect
            words="Turning Ideas into Scalable & High-Performance Applications"
            className="text-center text-[36px] md:text-5xl lg:text-7xl font-bold"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi! I&apos;m Manish, a passionate Full Stack MERN Developer with expertise in Java, Data Structures & Algorithms, and exploring AI integration in development. I love building dynamic, scalable, and user-friendly applications.
          </p>

          <a href="#projects">
            <MagicButton
              title="Explore My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
