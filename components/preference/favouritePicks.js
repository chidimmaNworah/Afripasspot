import React from "react";

export default function FavouritePicks() {
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center pb-12 px-4 text-center">
      <h1 className="text-2xl mt-8 mb-6 font-inder">FAVOURITE PICKS</h1>
      <ul className="flex flex-wrap gap-4 justify-center text-sm font-inder">
        <li className="bg-gray-200/80 backdrop-blur-md rounded-xl shadow-xl p-4 items-center cursor-pointer hover:bg-gray-200 transition-colors">
          Soup
        </li>
        <li className="bg-gray-200/80 backdrop-blur-md rounded-xl shadow-xl p-4 items-center cursor-pointer hover:bg-gray-200 transition-colors">
          Stew
        </li>
        <li className="bg-gray-200/80 backdrop-blur-md rounded-xl shadow-xl p-4 items-center cursor-pointer hover:bg-gray-200 transition-colors">
          Vegetable Salad
        </li>
        <li className="bg-gray-200/80 backdrop-blur-md rounded-xl shadow-xl p-4 items-center cursor-pointer hover:bg-gray-200 transition-colors">
          Fruit Salad
        </li>
        <li className="bg-gray-200/80 backdrop-blur-md rounded-xl shadow-xl p-4 items-center cursor-pointer hover:bg-gray-200 transition-colors">
          Swallow
        </li>
      </ul>
      <img
        src="/assets/floralbg.png"
        alt="Flower Decoration"
        className="absolute bottom-0 right-0 object-contain no-repeat -scale-x-100 z-[-10] w-60 rotate-90"
      />
    </div>
  );
}
