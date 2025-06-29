import React from "react";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center w-full flex flex-col justify-center items-start text-white px-4 gap-4 overflow-hidden"
      style={{ backgroundImage: "url('/assets/herobg.png')", height: 360 }}
    >
      <h1 className="text-4xl font-inder w-[80%] md:w-[70%] text-left">
        100 African Culinary Recipes from the Core of the Continent
      </h1>
      <button className="rounded bg-gray-200/70 text-gray-9 00 py-2 hover:bg-gray-200/50 transition-colors duration-300">
        See them all
      </button>
    </div>
  );
}
