import React from "react";
import Image from "next/image";
import MenuItems from "../menu/MenuItems";
import SectionHeader from "./SectionHeader";

const HomeMenu = () => {
  return (
    <section className="">
      <div className=" absolute w-full right-0 left-0">
        <div className="absolute left-0 -top-[100px] -z-10">
          <Image src={"/sallad1.png"} width={109} height={189} alt={"sallad"} />
        </div>
        <div className="h-48 absolute -right-0 -top-[100px] -z-10">
          <Image src={"/sallad2.png"} width={107} height={195} alt={"sallad"} />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeader subHeader={"check out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
        <MenuItems />
      </div>
    </section>
  );
};

export default HomeMenu;
