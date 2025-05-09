import Image from "next/image";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHouse } from "react-icons/fa6";

export default function Home() {
  return (
  <div className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={[
        {name:'Home', link:'/', icon:<FaHouse/>}
      ]}/>
      <Hero/>
      <Grid/>

    </div>
  </div>
  );
}
