import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

  // Container fade+up
  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  // Heading slide in
  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // List item fade+up
  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <div className="flex flex-col items-center justify-center py-12 z-10 relative px-4">
        {/* Heading */}
        <motion.h1
          className="text-2xl mt-8 mb-6 font-inder text-center"
          variants={slideInLeft}
        >
          HOW LONG DO YOU WANT TO SPEND COOKING?
        </motion.h1>

        {/* List with stagger */}
        <ul className="flex flex-wrap gap-4 justify-center text-sm font-inder h-full">
          {items.map((item, index) => (
            <motion.li
              key={index}
              custom={index}
              variants={itemFadeUp}
              className="bg-gray-200/80 backdrop-blur-md h-40 rounded-t-full rounded-b-xl shadow-xl p-2 items-center justify-center text-center cursor-pointer hover:bg-gray-200 transition-colors flex flex-col w-[140px] sm:w-[180px]"
            >
              <p className="font-semibold">{item.title}</p>
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
            </motion.li>
          ))}
        </ul>

        {/* Decorative background */}
        <img
          src="/assets/floralbg.png"
          alt="Flower Decoration"
          className="absolute top-0 left-0 object-contain no-repeat z-[-10] w-60"
        />
      </div>

      {/* The bottom section can also be motion-wrapped similarly if desired */}
      {/* ... */}
    </motion.div>
  );
}
