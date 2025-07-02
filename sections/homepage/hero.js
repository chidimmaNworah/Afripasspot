import React from "react";
import { motion } from "framer-motion";
import LightHoverButton from "@/components/buttons/HoveredButton";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <motion.div
      className="bg-cover bg-center w-full flex flex-col justify-center items-start text-white px-4 gap-4 overflow-hidden"
      style={{ backgroundImage: "url('/assets/herobg.png')", height: 360 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
    >
      <motion.h1
        className="text-4xl font-inder w-[80%] md:w-[70%] text-left"
        custom={0.2}
        variants={slideInLeft}
      >
        100 African Culinary Recipes from the Core of the Continent
      </motion.h1>

      <motion.div custom={0.4} variants={slideInLeft}>
        <LightHoverButton text="Explore Recipes" link="/recipes" />
      </motion.div>
    </motion.div>
  );
}
