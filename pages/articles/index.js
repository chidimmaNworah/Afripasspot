// pages/articles/index.js

import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";

const mockArticles = [
  {
    id: 1,
    title: "The History of Jollof: A West African Staple",
    excerpt:
      "Dive into the origins and cultural significance of Jollof rice...",
    image: "/images/jollof-article.jpg",
    slug: "history-of-jollof",
    category: "Culture",
    date: "July 1, 2025",
  },
  {
    id: 2,
    title: "Top 10 Nigerian Soups You Must Try",
    excerpt: "From Egusi to Ogbono, explore delicious soups across Nigeria...",
    image: "/images/nigerian-soups.jpg",
    slug: "top-10-nigerian-soups",
    category: "Food",
    date: "June 20, 2025",
  },
  {
    id: 3,
    title: "How Food Connects African Diasporas",
    excerpt:
      "See how African food unites people globally, from Lagos to London.",
    image: "/images/food-connects.jpg",
    slug: "food-connects-diaspora",
    category: "Diaspora",
    date: "May 5, 2025",
  },
];

const categories = ["All", "Culture", "Food", "Diaspora"];

export default function ArticlesHome() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = mockArticles.filter((article) => {
    const matchCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    const matchSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

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
      {/* Page Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-[#8CD829] text-center mb-10"
      >
        ARTICLES
      </motion.h1>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10"
      >
        <div className="flex gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium cursor-pointer ${
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
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8CD829]"
          />
        </div>
      </motion.div>

      {/* Articles Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {filteredArticles.map((article) => (
          <Link href="/articles/1.js">
            <motion.div
              key={article.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl overflow-hidden shadow cursor-pointer hover:shadow-lg transition-all"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-[#FF5500] mb-1">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm mb-2">{article.excerpt}</p>
                <div className="text-xs text-gray-500 flex justify-between items-center">
                  <span>{article.date}</span>
                  <span className="text-gray-400">2mins read</span>
                  <span className="bg-[#8CD829]/10 text-[#8CD829] px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <Link href={`/articles/${article.slug}`}>
                  <button className="mt-3 text-sm text-[#8CD829] font-medium hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredArticles.length === 0 && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center text-gray-500 mt-20"
        >
          No articles found matching your search or filter.
        </motion.div>
      )}
    </div>
  );
}
