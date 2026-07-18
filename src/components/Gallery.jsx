import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Podaci o slikama - slobodno koristi velika slova i razmake kako god želiš
const images = [
  { id: 1, cat: "Nokti", src: "/images/nokti.jpg" },
  { id: 2, cat: "Makeup", src: "/images/makeup.jpg" },
  { id: 3, cat: "Spray Tan", src: "/images/spraytan.jpg" },
  { id: 4, cat: "Nokti", src: "/images/nokti2.jpg" }
];

export default function Gallery({ setImage }) {
  const [activeCat, setActiveCat] = useState("Sve");

  // Popis kategorija točno onako kako želiš da pišu na gumbima u sučelju
  const categories = ["Sve", "Nokti", "Makeup", "Spray Tan"];

  // Robusno filtriranje: tijekom usporedbe čistimo razmake (.trim()) i ignoriramo velika/mala slova (.toLowerCase())
  const filteredImages = activeCat === "Sve" 
    ? images 
    : images.filter(img => img.cat.trim().toLowerCase() === activeCat.trim().toLowerCase());

  return (
    <div className="space-y-8">
      {/* Filter kategorija */}
      <div className="flex flex-wrap justify-center gap-3 text-[11px] font-medium uppercase tracking-widest">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-5 py-2.5 rounded-full transition-all duration-200 border ${
              activeCat === cat 
                ? "bg-[#4A3E3F] text-white border-[#4A3E3F] shadow-md" 
                : "bg-[#FDF5F6] text-[#4A3E3F] border-transparent hover:bg-[#EFCACF]/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid sa slikama uz glatke i stabilne framer-motion animacije */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-h-250px">
        <AnimatePresence mode="popLayout">
          {filteredImages.map(img => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              key={img.id}
              className="aspect-square w-full overflow-hidden rounded-xl bg-[#FDF5F6] shadow-sm hover:shadow-md"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src={img.src}
                onClick={() => setImage(img.src)}
                className="w-full h-full object-cover cursor-pointer"
                alt={`Silver Beauty Studio ${img.cat}`}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}