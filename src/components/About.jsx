import React from "react";
import { FaCheck } from "react-icons/fa6";
import AboutImg1 from "../assets/about-two-img-1.jpg"
import AboutImg2 from "../assets/about-two-img-2.png"
import AboutIcon from "../assets/about-icon.png"
import Button from "./button/Button";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 font-dmSans w-[full] lg:max-w-[1320px] m-auto md:gap-y-40 gap-4">
      <div className="relative  lg:px-10 flex lg:justify-start justify-center lg:w-full w-full max-w-[600px] m-auto">
        <div className="w-full lg:w-auto">
            <img src={AboutImg1} alt="" className="w-full md:w-auto"/>
        </div>
        <div className="absolute lg:top-[150px] lg:right-0 md:top-[160px] md:right-0 hidden md:block">
            <img src={AboutImg2} alt=""  />
        </div>
        <div className="px-2  absolute top-[50%] right-[50%] -translate-x-[-50%]  -translate-y-[50%] z-[100]">
            <div className="bg-blue-700 rounded-full h-[140px] w-[140px] flex items-center justify-center">
                <img src={AboutIcon} alt="" />
            </div>
        </div>
      </div>
      <div className="md:px-10 lg:w-full w-full max-w-[600px] m-auto flex flex-col gap-4">
        <div>
          <h3 className=" uppercase tracking-[0.2rem] font-semibold text-blue-600">About Flights</h3>
          <h1 className="text-[1.4rem] md:text-[3rem] font-bold text-balance leading-tight"><span className="text-blue-600">Experience</span> luxury travel on a <span className="text-blue-600">private jet</span></h1>
        </div>
        <div>
            <p className="text-blue-600 font-semibold text-lg">There are many variations of passage of lorem available but the majority alteration</p>
        </div>
        <div>
            <p className="text-black/40 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum, lacus non faucibus congue, lectus quam viverra nulla, quis egestas neque sapien ac magna.</p>
        </div>
        <div className="flex gap-2 flex-col md:flex-row ">
            <div className="flex gap-2">
                <div className="h-[30px] w-[30px] bg-blue-600 flex justify-center items-center text-white rounded-full">
                <FaCheck/>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Luxury flights</h3>
                    <p className="text-black/40 ">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="h-[30px] w-[30px] bg-blue-600 flex justify-center items-center text-white rounded-full">
                <FaCheck/>
                </div>
                <div>
                    <h3 className=" text-lg font-semibold">Luxury flights</h3>
                    <p className="text-black/40 ">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
        <div>
            <Button/>
        </div>
      </div>
    </div>
  );
}

export default About;
