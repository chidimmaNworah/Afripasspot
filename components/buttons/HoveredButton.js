import Link from "next/link";
import React, { useState } from "react";

export default function LightHoverButton({ text, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="rounded text-black py-2 px-4 transition-colors duration-300"
      style={{
        background: hovered ? "rgb(229 231 235 / 0.5)" : "rgb(229 231 235)",
        color: hovered ? "white" : "black",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={link} className="text-inherit no-underline">
        {text}
      </Link>
    </button>
  );
}
