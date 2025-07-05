import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/homepage.module.scss";
import Footer from "@/components/footer";
import ThirdHero from "@/components/home/heros/thirdHero";
import Link from "next/link";
import Hero from "@/sections/homepage/hero";
import Titles from "@/components/titles";
import Diet from "@/components/preference/diet";
import CookingTime from "@/components/preference/cookingTime";
import StackedCards from "@/components/stackedCards";
import FavouritePicks from "@/components/preference/favouritePicks";
import SecondHero from "@/components/home/heros/secondHero";
import { motion } from "framer-motion";
import {
  ArrowDownRightFromCircleIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "lucide-react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <>
      <div
        className={`${geistSans.variable} ${geistMono.variable} h-full items-center justify-items-center mb-10 font-[family-name:var(--font-geist-sans)]`}
      >
        <main className="flex flex-col row-start-2 items-center h-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="w-full"
          >
            <Hero />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="w-full"
          >
            <CookingTime />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="w-full"
          >
            <Diet />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="w-full"
          >
            <ThirdHero />
          </motion.div>

          <motion.p
            className="relative mb-2 mt-10 text-sm text-center font-[family-name:var(--font-geist-mono)] w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Travel around Africa with us and discover <br />
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Satiating, Savoury Tastes
            </code>
            .
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="w-full"
          >
            <FavouritePicks />
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-8 lg:gap-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <StackedCards title="Rare" gradient="from-green-800 to-green-500" />
            <StackedCards
              title="Regular"
              gradient="from-lime-800 to-lime-500"
            />
            <StackedCards
              title="Trending"
              gradient="from-amber-800 to-amber-500"
            />
            <StackedCards
              title="Popular"
              gradient="from-orange-800 to-orange-500"
              className={styles.popularStackedCards}
            />
          </motion.div>
        </main>
      </div>
      <Titles title="Articles" buttonText="View All" />
      <div className="w-full h-full bg-[url('../public/articlesbg.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="w-full h-full bg-black/[.5] ">
          <div className="flex flex-col md:flex-row w-full h-full gap-6 px-4 py-10 max-w-screen-xl mx-auto">
            {/* Left side - 2/3 on md+, full on small screens */}
            <div className="w-full md:w-2/3 flex flex-col justify-between h-full">
              {/* Top Half */}
              <div className="text-white flex flex-col gap-2">
                <p>Top Pick</p>
                <p className="mt-6">Title of the article</p>
                <h3 className="font-inder text-2xl mb-8 max-w-2xl">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit...
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  <button className="flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-green-700/20 transition shadow bg-black/20">
                    <ArrowLeftCircleIcon /> Read More
                  </button>
                  <button className="flex items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-green-700/20 transition shadow bg-white/10">
                    <ArrowDownRightFromCircleIcon /> Explore More
                  </button>
                </div>
              </div>

              {/* Bottom Half */}
              <div className="flex flex-wrap gap-4 mt-20">
                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="text-white flex flex-col gap-2 w-[200px]"
                  >
                    <Image
                      src="/banner.jpg"
                      alt={`Article ${i}`}
                      width={200}
                      height={150}
                      className="shadow-lg object-cover"
                    />
                    <p className="text-sm mt-2 line-clamp-[calc(var(--characters)/100)]">
                      Title of the article can add lorem ipsum
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - 1/3 on md+, full on small screens */}
            <div className="w-full md:w-1/3">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  className="text-white flex flex-row items-start gap-4 shadow"
                  key={i}
                >
                  <Image
                    src="/banner.jpg"
                    alt={`Article ${i}`}
                    width={150}
                    height={100}
                    className="object-cover rounded"
                  />
                  <p className="text-sm">
                    Title of the article can add lorem ipsum
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="px-4 sm:px-20 mb-10"
      >
        <Titles title="Discover More" buttonText="View" />
        <div className="flex flex-row items-start justify-around mt-4 px-4 gap-10 flex-wrap sm:flex-nowrap">
          <div className="h-full">
            <div className={styles.heroTwo_contents}>
              <p className="text-greenafri text-inder text-2xl font-semibold">
                Hi, Welcome to Afripasspot!
              </p>
              <p>
                We are here to make sure you never have to worry about cooking
                the right meal for your family or friends. We provide you with
                the best recipes. <br />
                Here's what you can do with Afripasspot:
              </p>
              <ul className="list-disc ml-5 mt-2">
                <li>Find out more about a dish you know nothing about</li>
                <li>Discover new recipes from the depths of Africa</li>
                <li>Get listed in our restaurant / recipes directory</li>
                <li>Find where you can get the best rare dishes near you</li>
              </ul>
              <button className="rounded-lg mt-4 text-white bg-[#8CD829] px-4 py-2">
                <Link href="/contact-us">GET TO KNOW US</Link>
              </button>
            </div>
          </div>
          <SecondHero />
        </div>
      </motion.div>

      <motion.div
        className={styles.restaurants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className={styles.hero}>
          <div className={styles.hero_contents}>
            <h1>JOIN OUR NEWSLETTER</h1>
            <p>
              Don't miss out on the latest recipes, restaurant reviews, and
              culinary tips from Africa. Subscribe to our newsletter and be the
              first to taste something new!
            </p>
            <div className={styles.hero_search}>
              <input
                type="text"
                placeholder="Enter your email..."
                name="email"
              />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
