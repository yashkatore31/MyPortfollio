import Hero from "../components/Hero";
import Grid from "../components/Grid";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer"
import { navItems } from "@/data";

export default function Home() {
  return (
    <div className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer/>
      </div>
    </div>
  );
}
