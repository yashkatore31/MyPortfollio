"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { GlobeDemo } from "@/components/ui/GridGlobe";
import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { MagicButton } from "@/components/ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5"; import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 md:auto-rows-[18rem] md:grid-cols-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number | string;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string | React.ReactNode;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={cn(
        "group/bento overflow-hidden shadow-input relative row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}></div>
      <div className="h-full w-full absolute">
      {typeof img === "string" ? (
  <Image
    src={img}
    alt="Bento Image"
    className={cn(imgClassName, "object-cover object-center rounded-3xl")}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    style={{ objectFit: "cover" }}
  />
) : (
  img
)}

      </div>

      <div
        className={`absolute right-0 bottom-5 ${
          id === 4 ? "w-full opacity-80" : ""
        }`}
      >
        {spareImg && (
  <Image
    src={spareImg}
    alt="Spare Image"
    className={cn("object-cover object-center w-full h-full", imgClassName)}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    style={{ objectFit: "cover" }}
  />
)}

      </div>
      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-10 flex items-center justify-center text-white font-bold "></div>
        </BackgroundGradientAnimation>
      )}

      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="font-sans text-sm text-[#c1c2d3] font-extralight md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className="lg:text-3xl max-w-96 font-sans font-bold text-neutral-600 text-lg dark:text-neutral-200">
          {title}
        </div>
      </div>

      {id === 2 && <GlobeDemo />}

      {id === 3 && (
        <div className="flex gap-1  lg:gap-5 w-fit  absolute -right-3 lg:-right-2">
          <div className="flex flex-col gap-3 lg:gap-8 ">
            {["React.js", "Next.js", "TypeScript"].map((item) => (
              <span
                key={item}
                className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
              >
                {item}
              </span>
            ))}
            <span className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]" />
          </div>
          <div className="flex flex-col gap-3 lg:gap-8 ">
            <span className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]" />
            {["VueJs", "AWS", "MongooDB"].map((item) => (
              <span
                key={item}
                className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {id === 6 && (
        <div className=" relative items-center justify-center">
          <div className="absolute -bottom-5 right-0">
            <Lottie
              options={{
                animationData,
                loop: copied,
                autoplay: copied,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />
 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
      <MagicButton
        title={copied ? "Copied!" : "Copy Email"}
        icon={<IoCopyOutline />}
        HandleClick={() => {
          navigator.clipboard.writeText("ybkatore31@gmail.com");
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      />
    </div>
          </div>
        </div>
      )}
    </div>
  );
};
