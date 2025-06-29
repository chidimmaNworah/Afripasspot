import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/homepage.module.scss";
import Footer from "@/components/footer";
import ThirdHero from "@/components/home/heros/thirdHero";
import SecondHero from "@/components/home/heros/secondHero";
import CounterHero from "@/components/home/heros/counterHero";
import { MdFoodBank } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaMinus, FaPlus, FaLongArrowAltRight } from "react-icons/fa";
import FirstHero from "@/components/home/heros/firstHero";
import Hero from "@/sections/homepage/hero";
import Titles from "@/components/titles";
import Diet from "@/components/preference/diet";
import CookingTime from "@/components/preference/cookingTime";

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

export default function Home() {
  return (
    <>
      <div
        className={`${geistSans.variable} ${geistMono.variable} h-full items-center justify-items-center mb-10  font-[family-name:var(--font-geist-sans)]`}
      >
        <main className="flex flex-col row-start-2 items-center h-full">
          <Hero />
          <CookingTime />
          <Diet />
          <ThirdHero />
          {/* <Titles title="Top Categories" buttonText="View All" /> */}

          {/* <p className="mb-2 text-sm text-center font-[family-name:var(--font-geist-mono)">
            Travel around the Africa with us and discover <br />
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Satiating, Savoury Tastes
            </code>
            .
          </p> */}

          {/* <FirstHero /> */}
        </main>
      </div>

      {/* <div className="flex gap-4 items-center flex-col sm:flex-row justify-center mb-10">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          View Delicacies
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read about us
        </a>
      </div> */}

      {/* <SecondHero /> */}
      {/* <ThirdHero /> */}
      {/* <h1 className=" text-center text-2xl py-8">
        EXPLORE RECEPIES BY COUNTRY
      </h1>
      <p className="mb-2 text-sm text-center font-[family-name:var(--font-geist-mono)">
        We uncovered the foods for you so that you can spend the rest of your
        days tasting them <br />
        <a
          className="text-center flex justify-center items-center gap-2 hover:underline hover:underline-offset-4 text-[#8CD829]"
          href="/recepies"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdFoodBank className="text-white" />
          Explore all →
        </a>
        .
      </p> */}
      {/* <div
        className={`${geistSans.variable} ${geistMono.variable} h-full grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center px-8 pt-8 mb-10 sm:px-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <CounterHero target={54} title="Countries" duration={4000} />
        <CounterHero target={654} title="Cities" duration={2500} />
        <CounterHero target={13654} title="Recepies" duration={2000} />
      </div> */}

      {/* <div className={styles.restaurants}>
        <div className={styles.hero}>
          <div className={styles.hero_contents}>
            <h1>SPECIALTY RESTAURANTS</h1>
            <p>
              Search State or city to get our top recommended restaurants
              specializing in African delicacies
            </p>
            <div className={styles.hero_search}>
              <input
                type="text"
                placeholder="ENTER CITY OR STATE NAME"
                name="search"
              />
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="h-full">
        <div className={styles.heroTwo}>
          <div className={styles.heroTwo_contents}>
            <h1 className="text-2xl">Get Featured</h1>
            <p className="text-[#9ACD32]">100% Friendly services</p>
            <p>
              Green thumb is developed to allow visitors to view the best
              restaurants by city and state throughout the world. Restaurants
              are chosen from public information, visitor suggestions and online
              print reviews to provide you with core African delicacies in all
              parts of the world.
            </p>
            <button className="rounded-lg">
              <Link href="/contact-us">GET LISTED TODAY</Link>
            </button>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}
