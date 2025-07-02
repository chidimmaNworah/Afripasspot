// pages/recipes.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const recipes = [
  {
    id: 1,
    title: "Spicy Jollof Rice",
    description:
      "A West African classic made with tomatoes, peppers, and spices.",
    image: "/images/jollof.jpg",
    category: "Rice",
  },
  {
    id: 2,
    title: "Egusi Soup",
    description:
      "Melon seed soup cooked with vegetables, meats, and rich spices.",
    image: "/images/egusi.jpg",
    category: "Soup",
  },
  {
    id: 3,
    title: "Moi Moi",
    description:
      "Steamed bean pudding made with peppers, onions, and fish or egg.",
    image: "/images/moimoi.jpg",
    category: "Beans",
  },
  {
    id: 4,
    title: "Fried Plantains",
    description: "Golden-brown ripe plantains fried to perfection.",
    image: "/images/plantain.jpg",
    category: "Sides",
  },
];

const categories = ["All", "Rice", "Soup", "Beans", "Sides"];

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchCategory =
      selectedCategory === "All" || recipe.category === selectedCategory;
    const matchSearch = recipe.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfdfd] to-[#f6f6f6] py-12 px-6 md:px-12">
      {/* Title */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#8CD829] mb-10"
      >
        Discover African Recipes 🍲
      </motion.h1>

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
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                selectedCategory === cat
                  ? "bg-[#8CD829] text-white shadow"
                  : "border border-[#8CD829] text-[#8CD829] hover:bg-[#f1fdf0]"
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
