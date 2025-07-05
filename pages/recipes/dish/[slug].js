// pages/recipes/dish/[slug].js

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Simulated dish data — replace with real data fetch logic
const dishData = {
  name: "Egusi Soup",
  slug: "egusi-soup",
  aliases: ["Melon Seed Soup", "Igbo Egusi"],
  origin: "Nigeria (Igbo ethnic group)",
  description:
    "A delicious West African soup made with ground melon seeds, assorted meats, and leafy greens.",
  nutrition: ["Protein", "Healthy fats", "Iron"],
  ingredients: ["Egusi", "Spinach", "Palm oil", "Stockfish", "Pepper"],
  generalRecipe:
    "Grind egusi, heat oil, sauté onions and pepper, cook with stock and egusi paste, add meats and greens.",
  prepTime: "34 mins",
  pricePerPlate: "₦1500 - ₦5000",
  pairings: {
    extras: ["Snail", "Goat meat"],
    fruits: ["Avocado", "Banana"],
    sides: ["Pounded yam", "Eba"],
    drinks: ["Palm wine", "Zobo"],
  },
  image: "/images/egusi.jpg",
  age: "Centuries old",
  reviews: [],
  likes: 42,
  commentsCount: 5,
};

export default function DishPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Loading state
  if (!slug) return <div className="p-8 text-gray-500">Loading...</div>;

  return (
    <div className="bg-[#fdfdfd] min-h-screen px-6 md:px-16 py-12">
      {/* Breadcrumb */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-6 text-sm text-gray-500"
      >
        <Link href="/recipes">
          <span className="hover:underline text-[#8CD829]">
            ← Back to Recipes
          </span>
        </Link>
      </motion.div>

      {/* Title & Meta */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#FF5500] mb-3"
      >
        {dishData.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-6"
      >
        Also known as:{" "}
        <span className="text-[#8CD829] font-medium">
          {dishData.aliases.join(", ")}
        </span>
      </motion.p>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl overflow-hidden shadow mb-10 max-w-3xl"
      >
        <Image
          src={dishData.image}
          alt={dishData.name}
          width={800}
          height={500}
          className="object-cover w-full h-auto"
        />
      </motion.div>

      {/* Description Block */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold text-[#8CD829] mb-2">
          Description
        </h2>
        <p className="text-gray-700">{dishData.description}</p>
      </motion.div>

      {/* Meta Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <InfoBox label="Origin" value={dishData.origin} />
        <InfoBox label="Time to Prepare" value={dishData.prepTime} />
        <InfoBox label="Avg. Price per Plate" value={dishData.pricePerPlate} />
        <InfoBox label="Food Age" value={dishData.age} />
      </div>

      {/* Ingredients & Nutrition */}
      <DetailSection
        title="Ingredients It Favours"
        items={dishData.ingredients}
      />
      <DetailSection title="Nutritional Value" items={dishData.nutrition} />

      {/* General Recipe */}
      <motion.div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#8CD829] mb-2">
          General Recipe
        </h2>
        <p className="text-gray-700">{dishData.generalRecipe}</p>
      </motion.div>

      {/* Pairings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <DetailSection title="Extras" items={dishData.pairings.extras} />
        <DetailSection title="Fruits" items={dishData.pairings.fruits} />
        <DetailSection title="Sides" items={dishData.pairings.sides} />
        <DetailSection title="Drinks" items={dishData.pairings.drinks} />
      </div>

      {/* Interactions */}
      <div className="mt-10 text-gray-700">
        <p className="mb-2">
          <strong>{dishData.likes}</strong> people liked this dish.
        </p>
        <p className="mb-6">
          <strong>{dishData.commentsCount}</strong> comments on this dish.
        </p>

        <motion.textarea
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-28 border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#8CD829]"
          placeholder="Leave a review..."
        ></motion.textarea>
      </div>
    </div>
  );
}

function InfoBox({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-5 rounded-xl shadow"
    >
      <h4 className="text-[#FF5500] font-medium">{label}</h4>
      <p className="text-gray-700">{value}</p>
    </motion.div>
  );
}

function DetailSection({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-4"
    >
      <h3 className="text-lg font-semibold text-[#8CD829] mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
