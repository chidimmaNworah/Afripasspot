import React from "react";

export default function Diet() {
  return (
    <div
      className="w-full h-full bg-left bg-contain bg-no-repeat relative flex flex-col items-center justify-center pb-12 px-4 text-center"
      style={{ backgroundImage: "url('/assets/floralbg.png')" }}
    >
      <h1 className="text-2xl mt-8 mb-6 font-inder">
        CHOOSE YOUR DIET PREFERENCE
      </h1>
      <ul className="flex flex-wrap gap-4 justify-center text-sm font-inder">
        <li className="bg-gray-200/80 backdrop-blur-md rounded-xl shadow-xl p-4 items-center cursor-pointer hover:bg-gray-200 transition-colors">
          I eat Everything
        </li>
        <li className="bg-gray-200/80 backdrop-blur-md rounded-xl shadow-xl p-4 items-center cursor-pointer hover:bg-gray-200 transition-colors">
          Vegetarian
        </li>
        <li className="bg-gray-200/80 backdrop-blur-md rounded-xl shadow-xl p-4 items-center cursor-pointer hover:bg-gray-200 transition-colors">
          Vegan
        </li>
        <li className="bg-gray-200/80 backdrop-blur-md rounded-xl shadow-xl p-4 items-center cursor-pointer hover:bg-gray-200 transition-colors">
          Pescetarian
        </li>
      </ul>
    </div>
  );
}
