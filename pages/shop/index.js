// pages/shop.js

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Suya Spice Mix",
    description: "Perfect blend for authentic Nigerian suya flavor.",
    image: "/images/products/suya-spice.jpg",
    amazonUrl: "https://www.amazon.com/dp/B09XYZ1234",
  },
  {
    id: 2,
    name: "African Mortar & Pestle",
    description: "Traditional hardwood tool for pounding yam and spices.",
    image: "/images/products/mortar-pestle.jpg",
    amazonUrl: "https://www.amazon.com/dp/B08ABC9876",
  },
  {
    id: 3,
    name: "Jollof Rice Seasoning",
    description: "Aromatic spices crafted for West African jollof rice.",
    image: "/images/products/jollof-seasoning.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07DEF1234",
  },
  {
    id: 4,
    name: "African Cuisine Cookbook",
    description:
      "Explore classic African dishes with step-by-step instructions.",
    image: "/images/products/african-cookbook.jpg",
    amazonUrl: "https://www.amazon.com/dp/B07COOKBOOK",
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen px-6 md:px-14 py-12 bg-gradient-to-b from-[#fdfdfd] to-[#f6f6f6]">
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
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-[#8CD829] text-center mb-10"
      >
        Afripasspot Shop 🛍️
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
      >
        Discover curated African-inspired cooking essentials, kitchen tools, and
        ingredients — shipped via Amazon.
      </motion.p>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-[#FF5500] mb-1">
                {product.name}
              </h2>
              <p className="text-gray-600 text-sm mb-3">
                {product.description}
              </p>
              <Link href={product.amazonUrl} target="_blank">
                <button className="text-sm bg-[#8CD829] text-white py-2 px-4 rounded-full hover:bg-[#76b924] transition-all">
                  Buy on Amazon →
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
