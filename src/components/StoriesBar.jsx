import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const storyData = [
  { img: "/images/chicken-biryani.jpg", title: "Special" },
  { img: "/images/mutton-biryani.jpg", title: "Chef" },
  { img: "/images/grilled-chicken.jpg", title: "Grill" },
  { img: "/images/falooda.jpg", title: "Dessert" },
  { img: "/images/chicken-65.jpg", title: "Starter" },
  { img: "/images/dum-biryani.jpg", title: "Biryani" },
  { img: "/images/fish-biryani.jpg", title: "Seafood" },
  { img: "/images/grill-chicken-full.jpg", title: "Today" },
  { img: "/images/mutton-keema.jpg", title: "Mutton" },
  { img: "/images/mini-biryani.jpg", title: "Mini" },
  { img: "/images/zomato-logo.jpg", title: "Online" },
  { img: "/images/icecream.jpg", title: "Yum.." },
  { img: "/images/veg-biryani.jpg", title: "veg" },
];

export default function StoriesBar() {
  const [active, setActive] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (active === null) return;
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          handleNext();
          return 0;
        }
        return p + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [active]);

  const handleNext = () => {
    const next = active + 1;
    if (next < storyData.length) setActive(next);
    else setActive(null);
  };

  return (
    <>
      {/* STORY STRIP */}
      <div className="flex gap-4 p-4 overflow-x-auto no-scrollbar">
        {storyData.map((story, idx) => (
          <div
            key={idx}
            onClick={() => setActive(idx)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full border-2 border-red-500 overflow-hidden">
              <img
                src={story.img}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs mt-1">{story.title}</span>
          </div>
        ))}
      </div>

      {/* STORY VIEWER POPUP */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              src={storyData[active].img}
              className="max-h-[80vh] max-w-[85vw] rounded-xl"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
            />

            {/* PROGRESS BAR */}
            <div className="w-3/4 h-1 bg-white/20 mt-6 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
