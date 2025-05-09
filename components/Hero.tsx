import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MagicButton }  from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";


export default function hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full md:-left-32 md:-top-20 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <div className=" absolute top-0 left-0 flex h-screen w-full items-center justify-center dark:bg-black-100 ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "dark:[background-image:linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      </div>


      <div className="flex justify-center relative my-20 z-10">
<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
  <h2 className=" uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 ">
    My Portfolio
  </h2>
  <TextGenerateEffect
    className="text-center text-[40px] md:text-5xl lg:text-6xl "
    words="I am a software engineer"
  />
  <p className="text-center md:tracking-wider mb-5text-sm md:text-lg lg:text-2xl ">
    Hi , I&apos;m Yash , a FullStack Developer
  </p>
  <a href="/about">
  <MagicButton title="show my work" position="right" icon={<FaLocationArrow />}/></a>
</div>
</div>
      
    </div>
  );
}

