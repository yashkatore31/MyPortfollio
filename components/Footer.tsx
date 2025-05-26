import React from "react";
import { MagicButton } from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import {socialMedia} from "@/data"
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full p-20 pb-10" id="contact">
    {/* <div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 ">
        {companies.map(({id,name , img})=>(
                <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                    <img src={img} alt={name}/>
                </div>

            ))}
        </div>
    </div> */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-20" width={20} height={20}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-center text-3xl md:text-4xl  lg:max-w-[45vw] lg:text-5xl">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-400 md:mt-10 my-5 text-center">
          Reach out me today and let&apos;s discuss how can I help achieve your
          goals.
        </p>
        <a href="mailto:ybkatore31@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16  md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">copyright &copy; 2025 Yash Katore</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map(({id ,link,  img})=>(
                <div key={id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 ">
                    <a href={link}><Image src={img} alt={`social icon ${id}`} width={25} height={25} /></a>
                </div>

            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
