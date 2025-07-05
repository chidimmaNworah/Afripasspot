// pages/about.js

import NewsLetter from "@/components/footer/NewsLetter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfdfd] to-[#f6f6f6] px-6 md:px-14 py-16">
      {/* Breadcrumb */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 text-sm text-gray-500"
      >
        <Link href="/">
          <span className="hover:underline text-[#8CD829]">
            ← Back to Homepage
          </span>
        </Link>
      </motion.div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#8CD829] mb-4">
          About Afripasspot
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          A digital journey through the flavors, stories, and spirit of African
          cuisine. At Afripasspot, we don't just share recipes — we connect
          continents, cultures, and generations through the universal language
          of food.
        </p>
      </motion.div>

      {/* Company Story */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-20 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-[#FF5500] mb-4">
          Our Story 🍴
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Afripasspot was born from a hunger — not just for food, but for
          representation. We wanted a platform that would honor the rich and
          diverse culinary traditions of Africa, while making them accessible to
          a global audience. What started as a simple blog is now a movement; a
          growing digital space where people can discover authentic African
          dishes, shop curated African Inspired kitchen tools, read
          culturally-rooted articles, and connect with food lovers around the
          world.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Today, Afripasspot is more than a brand — it's a bridge that connects
          you regardless of your location and brings you back to our table.
        </p>
      </motion.div>

      {/* Vision & Mission */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
      >
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold text-[#8CD829] mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To become the leading platform for African food discovery,
            storytelling, and commerce — where culture meets discovery, and
            flavor meets innovative acceptance.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold text-[#FF5500] mb-2">
            Our Mission
          </h3>
          <p className="text-gray-700">
            To preserve, promote, and globalize African cuisine by creating
            engaging content, building tech-driven tools, and partnering with
            culinary artisans across the continent.
          </p>
        </div>
      </motion.div>

      {/* Founder Spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-8 mb-20"
      >
        <div className="w-full md:w-1/3">
          <Image
            src="/founder.jpg" // Replace with your image
            alt="Founder of Afripasspot"
            width={400}
            height={400}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-bold text-[#8CD829] mb-2">
            Meet the Founder
          </h3>
          <p className="text-gray-700">
            Ms. Chidimma Nworah is a passionate advocate for African food
            culture, a digital visionary, and a lover of bringing back awareness
            to homeland. With a background in IT and Greenery advocacy, Long has
            she wondered how to overcome the swelling ignorance to the African
            culture, she started Afripasspot to fill a void — and indirectly
            made significant impact, building a vibrant community and putting an
            end to the long ignored unawareness of African beautiful delicacies,
            even within Africans. Driven by storytelling, authenticity, and
            impact, Chidimma leads the team with heart, hustle, and a touch of
            pepper soup magic.
          </p>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-20"
      >
        <h3 className="text-3xl font-semibold text-center text-[#FF5500] mb-8">
          Our Team
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[1].map((n) => (
            <div
              key={n}
              className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <div className="h-40 w-40 mx-auto rounded-full bg-gray-200 mb-4 overflow-hidden">
                <Image
                  src="/founder.jpg"
                  alt="Chidimma Nworah"
                  title="Founder"
                  width={160}
                  height={160}
                  className="object-cover rounded-full object-center"
                />
              </div>
              <h4 className="text-xl font-semibold text-[#8CD829] text-center">
                Chidimma Nworah
              </h4>
              <p className="text-center text-sm text-gray-600">Founder</p>
            </div>
          ))}
          {[1].map((n) => (
            <div
              key={n}
              className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <div className="h-40 w-40 mx-auto rounded-full bg-gray-200 mb-4">
                <Image
                  src="/tonydev.png"
                  alt="Tony Eneh"
                  title="Founding Engineer"
                  width={160}
                  height={160}
                  className="object-cover rounded-full"
                />
              </div>
              <h4 className="text-xl font-semibold text-[#8CD829] text-center">
                Tony Eneh
              </h4>
              <p className="text-center text-sm text-gray-600">
                Founding Engineer
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Collaborations */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mb-20 max-w-5xl mx-auto"
      >
        <h3 className="text-3xl font-semibold text-[#8CD829] mb-4">
          Collaborations & Partnerships 🤝
        </h3>
        <p className="text-gray-700 mb-2">
          Afripasspot actively collaborates with chefs, bloggers, local farmers,
          diaspora communities, and Afrocentric brands to create a vibrant food
          ecosystem. From recipe takeovers to kitchenware collaborations, we’re
          always cooking up new ways to showcase the soul of African cuisine.
        </p>
        <p className="text-gray-700">
          If you'd like to partner with us, sponsor an article, or join our
          mission, reach out! We believe in the power of community and shared
          stories — and we’re always hungry for meaningful connections.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center bg-[#8CD829] text-white py-12 px-6 rounded-xl shadow-xl"
      >
        <h3 className="text-3xl font-bold mb-4">Join Our Journey</h3>
        <p className="max-w-xl mx-auto text-lg mb-6">
          If you're a home cook, food blogger, chef, diaspora dreamer, or just
          curious — Afripasspot welcomes you. Subscribe to our newsletter,
          explore our recipes, and become part of a flavorful movement.
        </p>
        <div className="max-w-md mx-auto bg-green-800 px-8 py-4 rounded-lg">
          <NewsLetter />
        </div>
      </motion.div>
    </div>
  );
}
