import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { id: 1, cat: "nokti", src: "/images/nokti.jpg" },
  { id: 2, cat: "makeup", src: "/images/makeup.jpg" },
  { id: 3, cat: "spraytan", src: "/images/spraytan.jpg" },
  { id: 4, cat: "nokti", src: "/images/nokti2.jpg" }
];

export default function Gallery({ setImage }) {
  const [activeCat, setActiveCat] = useState("Sve");

  const filteredImages = activeCat === "Sve" 
    ? images 
    : images.filter(img => img.cat === activeCat);

  return (
    <div className="space-y-8">
      {/* Filter kategorija */}
      <div className="flex flex-wrap justify-center gap-3 text-[10px] uppercase tracking-widest">
        {["Sve", "Nokti", "Makeup", "Spray Tan"].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-5 py-2 rounded-full transition-all ${
              activeCat === cat 
                ? "bg-[#4A3E3F] text-white shadow-md" 
                : "bg-[#FDF5F6] text-[#4A3E3F] hover:bg-[#EFCACF]/30"
            }`}
          >
            {cat === "spraytan" ? "Spray Tan" : cat}
          </button>
        ))}
      </div>

      {/* Grid sa slikama */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.map(img => (
            <motion.img
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              key={img.id}
              src={img.src}
              onClick={() => setImage(img.src)}
              className="aspect-square object-cover rounded-xl cursor-pointer shadow-sm hover:shadow-md"
              alt={`Silver Beauty Studio ${img.cat}`}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}