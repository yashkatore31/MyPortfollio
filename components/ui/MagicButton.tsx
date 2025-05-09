import React from "react";
import { cn } from "@/lib/utils";
import { useAnimate } from "motion/react";
import { motion, stagger } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const MagicButton = ({
  title,
  icon,
  position,
  HandleClick,
  otherClasses,
}: {
  title: string;
  position: string;
  icon: react.ReactNode;
  HandleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden w-full rounded-lg focus:outline-none md:w-60 md:mt-10">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl  gap-2  ${otherClasses}`}> 
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};
