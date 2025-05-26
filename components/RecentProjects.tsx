import React from "react";
import { projects } from "@/data/index";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="pt-20 " id="projects">
      <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-5xl text-[40px]">
        A small selection of recent{" "}
        <span className="text-purple-400">projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              {/* Image Container */}
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[40vh] h-[30vh] mb-10 overflow-hidden lg:rounded-3xl bg-[#13162d]">
                {/* Background */}
                <img
                  src="/bg.png"
                  alt="Background"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
                />
                {/* Foreground Project Image */}
                <img
                  src={img}
                  alt={title}
                  className="relative z-10 object-contain max-h-full max-w-full"
                />
              </div>

              {/* Title and Description */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-1">
                {des}
              </p>

              {/* Icons and Link */}
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{ transform: `translateX(-${index * 10}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl text-sm text-purple-400">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
