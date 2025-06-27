/*
  Three.js Floating Cards in a Floral Background using @react-three/fiber
  You need to install the following:
  npm install three @react-three/fiber @react-three/drei framer-motion
*/

"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls, Environment } from "@react-three/drei";
import Image from "next/image";
import { Suspense } from "react";

const categories = [
  { icon: "/icons/coffee.png", label: "Breakfast" },
  { icon: "/icons/launch.png", label: "Launch" },
  { icon: "/icons/dinner.png", label: "Dinner" },
  { icon: "/icons/sugar-free.png", label: "Sugar Free" },
  { icon: "/icons/low-calories.png", label: "Low Calories" },
];

function FloatingCard({ icon, label, position }) {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
      position={position}
    >
      <Html center>
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-4 flex flex-col items-center w-40">
          <Image src={icon} alt={label} width={80} height={80} />
          <p className="mt-2 text-sm font-medium text-gray-700">{label}</p>
        </div>
      </Html>
    </Float>
  );
}

export default function FloatingCardsScene() {
  return (
    <div
      className="w-full h-[30vh] bg-center bg-cover relative z-5"
      style={{ backgroundImage: "url('/assets/floralbg.png')" }}
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          {categories.map((cat, index) => (
            <FloatingCard
              key={index}
              icon={cat.icon}
              label={cat.label}
              position={[index * 2 - 4, 0, 0]}
            />
          ))}
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="absolute top-4 left-0 right-0 text-center text-white font-bold text-2xl drop-shadow-lg">
        Top Categories
      </div>
    </div>
  );
}
