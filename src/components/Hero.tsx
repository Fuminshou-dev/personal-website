import React from "react";

export default function Hero() {
  return (
    <div className="flex w-full h-full bg-[image:linear-gradient(to_right,#020617_40%,#0f172a_40%)]">
      <div className="container mx-auto flex justify-center items-center">
        <div className=" w-1/2 h-1/2 m-0 left-1/4 top-1/3 flex">
          <div className="h-full w-1/3 bg-[#091021e8] flex flex-col justify-between items-center">
            <div className=" h-1/2 w-full justify-center items-center flex">
              <div className="p-16 bg-slate-300 rounded-full"></div>
            </div>
            <div className="h-1/2 flex gap-0 flex-col justify-center items-center w-full">
              <div className=" w-full h-full flex flex-col justify-center items-center">
                <p className=" text-center text-4xl font-bold">
                  Anton FIlippov
                </p>
                <span className="border-b-2 border-white mt-4 w-1/4"></span>
              </div>
              <div className=" w-full h-full text-center text-2xl">
                Full-stack developer
              </div>
              <div className="w-full h-1/4 text-center bg-slate-500">
                <div className="flex flex-row gap-4 justify-center items-center">
                  <a href="#" className="text-blue-500">
                    gh
                  </a>
                  <a href="#" className="text-blue-500">
                    tg
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-2/3 bg-[#0f172a] flex flex-col justify-evenly items-center px-8">
            <div className="space-y-4 w-full">
              <h1 className="text-7xl font-bold">Hello!</h1>
              <p className="text-2xl">I am a full-stack developer</p>
              <div className="flex flex-row gap-4">
                <button className="bg-blue-500 rounded-full p-2">Resume</button>
                <button className="bg-blue-500 rounded-full p-2">
                  Projects
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-evenly items-end text-start gap-4 overflow-hidden">
              <p className="text-lg">
                I am a 30-year-old web developer with a passion for building
                innovative solutions. I have worked with various technologies,
                including React, Node.js, and GraphQL. My goal is to help you
                achieve your goals by providing personalized guidance and
                support.
              </p>
              <p className="text-lg">
                Feel free to reach out if you have any questions or need further
                information. Im always here to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
