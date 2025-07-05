// pages/articles/[slug].js

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;

  // Placeholder data for demo (replace with CMS integration later)
  const article = {
    title: "The History of Jollof: A West African Staple",
    author: "Chef Ada Nwoke",
    date: "July 1, 2025",
    coverImage: "/images/jollof-article.jpg",
    excerpt:
      "Explore the roots of one of West Africa’s most iconic dishes — a culinary debate that spans countries and continents.",
    content: `
      Jollof rice is more than a dish — it's a culture, a tradition, and in many places, a national treasure. Originating from the Senegambian region, the dish has traveled far and wide, evolving in taste and technique.
      
      Over time, each West African country has adopted and adapted Jollof, creating passionate debates about whose version reigns supreme. From Nigerian smoky party Jollof to Ghanaian tomato-forward variations, each plate tells a story.
      
      Beyond taste, Jollof represents family gatherings, festive seasons, and identity. It connects the diaspora, appears in songs and memes, and continues to evolve.
      
      This is just one tale among many — one grain of a larger pot of stories we’re here to tell.
    `,
    tags: ["West Africa", "Culture", "History", "Jollof Rice"],
  };

  if (!slug) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{article.title} | Afripasspot</title>
      </Head>

      <div className="min-h-screen bg-[#fdfdfd] px-6 md:px-20 py-16">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4 text-sm text-gray-500"
        >
          <span
            onClick={() => router.push("/articles")}
            className="cursor-pointer text-[#8CD829] hover:underline"
          >
            Articles
          </span>{" "}
          / {slug.replace(/-/g, " ")}
        </motion.nav>

        {/* Header */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-[#8CD829] mb-4"
        >
          {article.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-600 mb-8"
        >
          By <span className="text-[#FF5500]">{article.author}</span> •{" "}
          {article.date} • 2 min read
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl overflow-hidden mb-10"
        >
          <Image
            src={article.coverImage}
            alt={article.title}
            width={1200}
            height={600}
            className="rounded-xl w-full object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg prose-orange max-w-4xl mx-auto text-gray-800"
        >
          {article.content.split("\n").map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </motion.div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-3">
          {article.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#8CD829]/10 text-[#8CD829] px-3 py-1 rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
