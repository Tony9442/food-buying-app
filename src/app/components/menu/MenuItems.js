import React from "react";

const MenuItems = () => {
  return (
    <div
      className="bg-gray-200 p-4 rounded-lg text-center 
      hover:bg-slate-50 hover:shadow-2xl hover:shadow-black/50 transition-all"
    >
      <img src={"/pizza.png"} alt="pizza" />
      <h3 className="font-semibold my-4 text-xl">Pepperoni Pizza</h3>
      <p className=" text-gray-500 text-sm">
        You will learn how to build a fullstack food ordering app
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItems;
