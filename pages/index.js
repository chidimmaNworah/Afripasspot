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
          <p className="relative mb-2 mt-10 text-sm text-center font-[family-name:var(--font-geist-mono)">
            Travel around the Africa with us and discover <br />
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Satiating, Savoury Tastes
            </code>
            .
          </p>
          <FavouritePicks />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-y-8 lg:gap-y-0">
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
          </div>
        </main>
      </div>
      {/* <div
        className={`${geistSans.variable} ${geistMono.variable} h-full grid grid-cols-[1fr_1fr_1fr] items-center justify-items-center px-8 pt-8 mb-10 sm:px-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <CounterHero target={54} title="Countries" duration={4000} />
        <CounterHero target={654} title="Cities" duration={2500} />
        <CounterHero target={13654} title="Recepies" duration={2000} />
      </div> */}

      <Titles title="Discover More" buttonText="View" />
      <div className="flex flex-row items-start justify-around mt-4 px-4 gap-10 flex-wrap sm:flex-nowrap">
        <div className="h-full">
          <div className={styles.heroTwo_contents}>
            <p className="text-greenafri text-inder text-2xl font-semibold">
              Hi, Welcome to Afripasspot!
            </p>
            <p>
              {/* Afripasspot Restaurants is a section developed to allow visitors
                to view the best restaurants by city and state throughout the
                world. Restaurants are chosen from public information, visitor
                suggestions and online print reviews to provide visitors with
                core African delicacies in all parts of the world. */}
              We are here to make sure you never have to worry about cooking the
              right meal for your family or friends. We provide you with the
              best recipes. <br />
              Here's what you can do with Afripasspot:
              <ul className="list-disc ml-5 mt-2">
                <li>Find out more about a dish you know nothing about</li>
                <li>Discover new recipes from the depths of Africa</li>
                <li>Get listed in our restaurant / recipes directory</li>
                <li>Find where you can get the best rare dishes near you</li>
              </ul>
            </p>
            <button className="rounded-lg">
              <Link href="/contact-us">GET TO KNOW US</Link>
            </button>
          </div>
        </div>
        <SecondHero />
      </div>

      <div className={styles.restaurants}>
        <div className={styles.hero}>
          <div className={styles.hero_contents}>
            <h1>JOIN OUR NEWSLETTER</h1>
            <p>
              Don't miss out on the latest recipes, restaurant reviews, and
              culinary tips from Africa. Subscribe to our newsletter and be the
            </p>
            <div className={styles.hero_search}>
              <input type="text" placeholder="SEARCH..." name="search" />
              <button>SEARCH</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
