import React from "react";
import Image from "next/image";

export default function CookingTime() {
  const items = [
    {
      title: "Fast",
      desc: "under 10mins preparation",
      img: "/assets/fast.png",
    },
    {
      title: "Easy",
      desc: "5 ingredients or less",
      img: "/assets/noodles.png",
    },
    {
      title: "Inexpensive",
      desc: "Easier on your wallet",
      img: "/assets/inexpensive.png",
    },
    {
      title: "To Go",
      desc: "Container Friendly anytime",
      img: "/assets/togo.png",
    },
    {
      title: "Foodie",
      desc: "Delicious and varied",
      img: "/assets/foodie.png",
    },
  ];

  return (
    <div className="bg-custom-orange w-full relative overflow-hidden pb-2">
      <div className="flex flex-col items-center justify-center py-12 z-10 relative px-4">
        <h1 className="text-2xl mt-8 mb-6 font-inder text-center">
          HOW LONG DO YOU WANT TO SPEND COOKING?
        </h1>

        <ul className="flex flex-wrap gap-4 justify-center text-sm font-inder h-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="bg-gray-200/80 backdrop-blur-md h-40 rounded-t-full rounded-b-xl shadow-xl p-2 items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition-colors flex flex-col w-[140px] sm:w-[180px]"
            >
              <p>{item.title}</p>
              <span className="text-xs text-gray-500 w-[70%] mb-2">
                {item.desc}
              </span>
              <div className="relative h-20 w-[100px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-full"
                />
              </div>
            </li>
          ))}
        </ul>
        <img
          src="/assets/floralbg.png"
          alt="Flower Decoration"
          className="absolute top-0 left-0 object-contain no-repeat z-[-10] w-60 "
        />
        {/* <img
          src="/assets/floralbg.png"
          alt="Flower Decoration"
          className="absolute top-0 right-0 object-contain no-repeat -scale-x-100 z-[-10] w-60 md:hidden"
        /> */}
      </div>

      <div
        className="w-full h-full py-6 bg-center bg-cover relative pb-12 overflow-hidden"
        style={{ backgroundImage: "url('/assets/akara.png')" }}
      >
        <div className="flex flex-wrap items-center justify-around text-center w-full h-full px-4">
          <div className="flex flex-col items-center justify-start h-full w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-100 mb-10">
              LET US <span className="text-[#ec5228]">BRING</span>{" "}
              <br className="lg:hidden" />{" "}
              <span className="text-[#BBEE2F]">HOME </span>
              TO YOU
            </h1>
            <hr className="w-24 border-t-4 border-[#EC5228] rounded-full mb-10" />

            <p className="w-60 lg:w-full text-lg text-gray-300">
              Explore through the depths of African dishes and beyond
            </p>
          </div>
          <div className="flex flex-col items-center justify-start w-full h-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-100 mb-10">
              FIND A DISH
            </h1>
            <button className="font-inder font-semibold text-2xl bg-gray-300/50  w-60 lg:w-full h-20 rounded text-gray-800 hover:bg-[#EC522850] hover:text-gray-200 transition-colors mb-4">
              REGION
            </button>
            <button className="font-inder font-semibold text-2xl text-gray-800 bg-[#BBEE2F]  w-60 lg:w-full h-20 rounded hover:bg-[#d44c24] transition-colors">
              TRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Flower image at the bottom */}
    </div>
  );
}
