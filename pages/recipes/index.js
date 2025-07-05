// pages/recipes.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

const recipes = [
  {
    id: 1,
    title: "Spicy Jollof Breakfast",
    description:
      "A West African classic made with tomatoes, peppers, and spices.",
    image: "/images/jollof.jpg",
    category: "Breakfast",
  },
  {
    id: 2,
    title: "Egusi Launch",
    description:
      "Melon seed Launch cooked with vegetables, meats, and rich spices.",
    image: "/images/egusi.jpg",
    category: "Launch",
  },
  {
    id: 3,
    title: "Moi Moi",
    description:
      "Steamed bean pudding made with peppers, onions, and fish or egg.",
    image: "/images/moimoi.jpg",
    category: "Dinner",
  },
  {
    id: 4,
    title: "Fried Plantains",
    description: "Golden-brown ripe plantains fried to perfection.",
    image: "/images/plantain.jpg",
    category: "Sides",
  },
];

const categories = ["All", "Breakfast", "Launch", "Dinner", "Sides"];

export default function RecipesPage() {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const queryCategories = router.query.categories;
      if (queryCategories) {
        const categoryArray = Array.isArray(queryCategories)
          ? queryCategories
          : queryCategories.split(",");
        setSelectedCategories(categoryArray);
      }
    }
  }, [router.isReady, router.query.categories]);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchCategory =
      selectedCategories.includes("All") ||
      selectedCategories.includes(recipe.category);
    const matchSearch = recipe.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfdfd] to-[#f6f6f6] py-12 px-6 md:px-12">
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
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10"
      >
        <div className="flex gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                const newSelected = cat === "All" ? ["All"] : [cat]; // You can make this multi-select if needed
                setSelectedCategories(newSelected);
                router.push({
                  pathname: "/recipes",
                  query: { categories: newSelected.join(",") },
                });
              }}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-crosshair ${
                selectedCategories.includes(cat)
                  ? "bg-[#8CD829] text-white shadow"
                  : "border border-[#8CD829] text-[#8CD829] hover:bg-[#8CD82980] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search recipe..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8CD829]"
          />
        </div>
      </motion.div>

      {/* Recipes Grid */}
      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filteredRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#FF5500] mb-1">
                  {recipe.title}
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  {recipe.description}
                </p>
                <span className="inline-block text-xs font-medium px-3 py-1 bg-[#8CD829]/20 text-[#8CD829] rounded-full">
                  {recipe.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredRecipes.length === 0 && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center text-gray-500 mt-20"
        >
          No recipes found matching your search/filter.
        </motion.div>
      )}
    </div>
  );
}
