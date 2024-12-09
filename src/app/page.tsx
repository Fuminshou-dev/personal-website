import Image from "next/image";
import HeroSection from "../components/Hero";
import Competencies from "@/components/Competencies";
import AboutMe from "@/components/about-me";
import GetInTouch from "@/components/get-in-touch";

export default function Home() {
  return (
    <div className="h-screen justify-center items-center flex flex-col">
      <HeroSection />
      <Competencies />
      <AboutMe />
      <GetInTouch />
    </div>
  );
}
