import Image from "next/image";
import { useState } from "react";
import Titles from "./titles";

const faqs = [
  {
    id: 1,
    question: "What is Wiwa app?",
    image: "/assets/food/egusi.jpg",
    time: "19 mins",
    calories: "387 kcal",
  },
  {
    id: 2,
    question: "Subscription fees?",
    image: "/assets/food/egusi.jpg",
    time: "19 mins",
    calories: "387 kcal",
  },
  {
    id: 3,
    question: "Egusi Soup",
    image: "/assets/food/egusi.jpg",
    time: "19 mins",
    calories: "387 kcal",
  },
  {
    id: 4,
    question: "Multiple accounts?",
    image: "/assets/food/egusi.jpg",
    time: "19 mins",
    calories: "387 kcal",
  },
  {
    id: 5,
    question: "Withdraw money?",
    image: "/assets/food/egusi.jpg",
    time: "19 mins",
    calories: "387 kcal",
  },
];

export default function StackedCards({
  title,
  gradient = "from-purple-500 to-indigo-600",
  className,
}) {
  const [order, setOrder] = useState(faqs);

  const handleClick = (id) => {
    const clicked = order.find((item) => item.id === id);
    const newOrder = [...order.filter((item) => item.id !== id), clicked];
    setOrder(newOrder);
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <div className="">
          <Titles title={title} buttonText="View All" />
        </div>
      )}
      <div className="relative w-full h-[500px]">
        {order.map((item, index) => {
          const isLast = index === order.length - 1;
          return (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="absolute w-full left-0 transition-all duration-500 cursor-pointer px-2"
              style={{
                top: `${index * 50}px`,
                zIndex: index,
              }}
            >
              <div
                className={`rounded-xl shadow-lg overflow-hidden bg-gradient-to-br ${gradient} text-white transition-all duration-300 w-full h-full`}
              >
                {!isLast ? (
                  <h3 className="font-semibold text-lg m-4">{item.question}</h3>
                ) : (
                  <div>
                    {/* Image Wrapper */}
                    <div className="relative w-full h-[250px]">
                      <Image
                        src={item.image}
                        alt={item.question}
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-black/20 z-0"></div>
                      <Image
                        src="/icons/heart-white.png"
                        alt="Favorite dish"
                        width={32}
                        height={32}
                        className="absolute top-2 right-2 z-10 hover:bg-white/10 rounded-full hover:p-1"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 px-4 py-3 space-y-2 bg-gradient-to-br text-white">
                      <p className="font-semibold text-lg">{item.question}</p>
                      <div className="flex items-center gap-4 text-xs">
                        <p className="flex items-center gap-2">
                          <Image
                            src="/icons/clock-white.png"
                            width={16}
                            height={16}
                            alt="clock"
                          />
                          {item.time}
                        </p>
                        <p className="flex items-center gap-2">
                          <Image
                            src="/icons/fire-white.png"
                            width={16}
                            height={16}
                            alt="fire"
                          />
                          {item.calories}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
