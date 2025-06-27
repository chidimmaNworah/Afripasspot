import Image from "next/image";
import React from "react";

export default function Titles({ title, buttonText }) {
  return (
    <div className="flex justify-between items-center px-4 py-4">
      <div className="flex items-center gap-2">
        <p className="font-inder font-semibold tracking-wider">{title}</p>
        <Image src="/icons/star-black.png" width={15} height={15} />
      </div>
      <button className="bg-green-800 text-gray-200 px-4 py-1 text-sm rounded">
        {buttonText}
      </button>
    </div>
  );
}
