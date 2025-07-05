import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import styles from "./style.module.css";
import localFont from "next/font/local";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";

const geistSans = localFont({
  src: "../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const containerRef = useRef(null);

  const currentPath = usePathname();

  const isActive = (path) => {
    return currentPath === path ? "text-[#A3F32D]" : "";
  };

  useEffect(() => {
    // Simulate authentication check (replace with actual auth logic)
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    enqueueSnackbar("You have been signed out", {
      variant: "error",
      preventDuplicate: true,
      autoHideDuration: 3000,
    });
    router.push("/auth/signin");
  };

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  const [clientDate, setClientDate] = useState("");

  useEffect(() => {
    setClientDate(formatDate());
  }, []);

  return (
    <>
      {/* Top navbar */}
      <div className="bg-gray-800 text-white flex justify-between items-center py-2 px-4">
        <div className="flex space-x-2 items-center">
          <Image
            src="/icons/clock-white.png"
            width={20}
            height={20}
            alt="clock"
          />
          <p className="text-gray-200 font-thin text-xs md:text-sm">
            {clientDate}
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <Image
            src="/icons/search-white.png"
            width={20}
            height={20}
            alt="search"
          />
          <Image
            src="/icons/heart-white.png"
            width={20}
            height={20}
            alt="heart"
          />
          <Image
            src="/icons/profile-white.png"
            width={20}
            height={20}
            alt="profile"
          />
        </div>
      </div>
      <nav
        className={`${
          isScrolled
            ? "bg-green-800/70 backdrop-blur-md shadow-md text-gray-200"
            : "bg-green-800 text-gray-200"
        } sticky top-0 z-50 transition duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold ">
            Afripasspot
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-[family-name:var(--font-geist-mono)">
            <Link
              href="/"
              className={`${isActive(
                "/"
              )} hover:text-green-600 transition duration-300`}
            >
              Home
            </Link>
            <Link
              href="/recipes"
              className={`${isActive(
                "/recipes"
              )} hover:text-green-600 transition duration-300`}
            >
              Recipes
            </Link>
            <Link
              href="/articles"
              className={`${isActive(
                "/articles"
              )} hover:text-green-600 transition duration-300`}
            >
              Articles
            </Link>
            <Link
              href="/shop"
              className={`${isActive(
                "/shop"
              )} hover:text-green-600 transition duration-300`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`${isActive(
                "/about"
              )} hover:text-green-600 transition duration-300`}
            >
              About Us
            </Link>
            {isAuthenticated ? (
              <button
                onClick={handleSignOut}
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className={`${isActive(
                    "/auth/signin"
                  )} hover:text-green-600 transition duration-300`}
                >
                  Login
                </Link>
                {/* <Link
                  href="/auth/signup"
                  className={`${isActive(
                    "/auth/signup"
                  )} hover:text-green-600 transition duration-300`}
                >
                  Register
                </Link> */}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobile_menu}>
            <button
              className={`${styles.artwork_nav} ${styles.artwork_nav__left}`}
              onClick={() => scrollContainer("left")}
            >
              &#8592;
            </button>
            <div className="mx-6 text-gray-200" ref={containerRef}>
              {[
                { href: "/", label: "Home" },
                { href: "/recipes", label: "Recipes" },
                { href: "/articles", label: "Articles" },
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About Us" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 transition duration-300 hover:text-[#99E82B] ${isActive(
                    item.href
                  )}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/auth/signin"
                    className="block px-4 py-2 text-white transition duration-300 hover:bg-indigo-100 hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
            <button
              className={`${styles.artwork_nav} ${styles.artwork_nav__right}`}
              onClick={() => scrollContainer("right")}
            >
              &#8594; {/* Right arrow */}
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
