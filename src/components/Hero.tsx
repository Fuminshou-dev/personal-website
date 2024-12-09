import React from "react";
import { Chart } from "./chart";

export default function HeroSection() {
  return (
    <div className="h-full w-full">
      <div className="container mx-auto flex flex-col justify-center items-center h-full ">
        <div className="flex flex-col gap-8 items-center text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500 select-none ">
          <h1 className="text-7xl">Fuminshou-dev</h1>
          <h2 className="text-5xl">Anton Filippov</h2>
          <div className=" w-full">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}
