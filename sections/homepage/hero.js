import React from "react";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center w-full h-[360px] flex flex-col justify-center items-start text-white px-4 gap-4"
      style={{ backgroundImage: "url('/assets/herobg.png')" }}
    >
      <h1 className="text-4xl font-inder lg:w-[60%] md:w-[70%] text-left">
        100 African Culinary Recipes from the Core of the Continent
      </h1>
      <button className="rounded bg-gray-200/70 text-gray-9 00 py-2 px-4 hover:bg-gray-200/50 transition-colors duration-300">
        See them all
      </button>
    </div>
  );
}
