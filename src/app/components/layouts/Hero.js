import React from "react";
import Image from "next/image";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <section className="hero mt-4">
        <div className="py-12">
          <h1 className="text-4xl font-semibold leading-normal">
            Everything is better
            <br /> with a&nbsp;<span className="text-primary">Pizza</span>
          </h1>
          <p className="my-6 text-gray-500 text-sm font-semibold">
            Pizza is the missing peice that makes everyday complete, a simple
            and yet a delicous joy in life
          </p>
          <div className="flex gap-4 text-sm">
            <button className="text-white uppercase flex justify-center gap-2 bg-primary px-4 py-2 rounded-full">
              Order Now
              <FaRegArrowAltCircleRight size={20} />
            </button>
            <button className=" text-gray-400 font-semibold flex gap-2 px-4 py-2 rounded-full border-0 items-center">
              Learn More
              <FaRegArrowAltCircleRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src={"/pizza.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"pizza"}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
