import React from "react";
import localFont from "next/font/local";
import { MdSmartDisplay } from "react-icons/md";

const geistSans = localFont({
  src: "../../../pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../../pages/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function SecondHero() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} font-sans w-full h-full`}
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="relative w-full max-w-4xl">
          <img
            src="/banner.jpg"
            alt="Banner"
            className="w-full h-auto object-cover"
          />

          {/* Centered Play Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm flex flex-col items-center">
            <p className="border border-white p-2 rounded-full bg-black bg-opacity-50">
              <MdSmartDisplay className="text-[30px]" />
            </p>
            <span className="mt-1">Play</span>
          </div>
        </div>

        {/* Description Text */}
        <p className="text-sm text-center font-[family-name:var(--font-geist-mono)] max-w-xl">
          To understand our vision & processes better, please watch our short
          educational video: <br />
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            Hidden Salivating dishes
          </code>
          .
        </p>

        {/* Explore Link */}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-[#8CD829]"
          href="/recepies"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdSmartDisplay className="text-white" />
          Explore more videos →
        </a>
      </div>
    </div>
  );
}
