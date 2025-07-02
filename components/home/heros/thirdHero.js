import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaGripfire, FaStar, FaLeaf } from "react-icons/fa";
import { LuAlarmClockCheck } from "react-icons/lu";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

// swiper module imports
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FloatingCardsScene from "@/components/FloatingCards";
import Image from "next/image";

const categories = [
  { icon: "/icons/coffee.png", label: "Breakfast" },
  { icon: "/icons/launch.png", label: "Launch" },
  { icon: "/icons/dinner.png", label: "Dinner" },
  { icon: "/icons/sugar-free.png", label: "Sugar Free" },
  { icon: "/icons/low-calories.png", label: "Low Calories" },
  { icon: "/icons/drinks.png", label: "Homemade Drinks" },
  { icon: "/icons/processed.png", label: "Processed Foods" },
  { icon: "/icons/sweettooth.png", label: "Sweet Tooth" },
  { icon: "/icons/desert.png", label: "Deserts" },
];

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15, // stagger by index
    },
  }),
};

export default function ThirdHero({ icon, label, position }) {
  return (
    <>
      <motion.div
        className={styles.thirdhero}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col gap-2 row-start-2 items-start mb-10">
          <motion.div
            className="flex items-center justify-between w-full"
            variants={slideInLeft}
          >
            <h1 className="text-lg text-left flex items-center gap-2 font-inder">
              TOP CATEGORIES <FaStar className="text-sm" />
            </h1>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#8CD829]"
              href="/categories"
              target="_blank"
              rel="noopener noreferrer"
            >
              More &#8594;
            </a>
          </motion.div>
          <div
            className={`${styles.thirdhero_categories} grid grid-cols-[1fr_1fr_1fr] items-center gap-4 h-full w-full text-center`}
          >
            {categories.map((cat, index) => (
              <motion.div
                className="flex items-center justify-between w-full"
                variants={slideInLeft}
              >
                <Image src={cat.icon} alt={cat.label} width={40} height={0} />
                <p className="mt-2 text-sm font-medium">{cat.label}</p>
              </motion.div>
            ))}
          </div>
          {/* <FloatingCardsScene /> */}
        </div>
        <div>
          <div className="flex flex-col gap-8 row-start-2 items-start">
            {/* <div className="text-gray-400 flex items-center flex-row justify-between w-full">
              <h1 className="text-2xl text-left flex items-center gap-2 ">
                GET INSPIRED <FaStar className="text-sm" />
              </h1>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#8CD829]"
                href="/recepies"
                target="_blank"
                rel="noopener noreferrer"
              >
                More &#8594;
              </a>
            </div> */}

            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className={styles.myswiper}
            >
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.getinspired}>
                  <img src="/banner.jpg" alt="" />
                  <p className="absolute top-4 right-2">
                    <CiHeart className={styles.hearticon} />
                  </p>
                  <div className={`${styles.text_container}`}>
                    <p className="text-sm mb-2">Zesty Grilled Chicken Salad</p>
                    <p className="flex items-center text-[10px] text-gray-400 mb-1">
                      <LuAlarmClockCheck className="text-sm mr-1" /> 20 min
                      {"  "}
                      <FaGripfire className="text-sm" /> 312kcal
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.getinspired}>
                  <img src="/banner.jpg" alt="" />
                  <p className="absolute top-4 right-2">
                    <CiHeart className={styles.hearticon} />
                  </p>
                  <div className={`${styles.text_container}`}>
                    <p className="text-sm mb-2">Zesty Grilled Chicken Salad</p>
                    <p className="flex items-center text-[10px] text-gray-400 mb-1">
                      <LuAlarmClockCheck className="text-sm mr-1" /> 20 min
                      {"  "}
                      <FaGripfire className="text-sm" /> 312kcal
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.div>
    </>
  );
}
