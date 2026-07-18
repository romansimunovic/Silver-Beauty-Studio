import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";


export default function Lightbox({ image, setImage }) {

  if (!image) return null;


  return createPortal(

    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      className="
        fixed
        inset-0
        z-[99999]

        flex
        items-center
        justify-center

        bg-black/80

        backdrop-blur-xl

        p-4

        cursor-zoom-out
      "

      onClick={() => setImage(null)}

    >


      <motion.img

        initial={{
          scale:0.85,
          opacity:0
        }}

        animate={{
          scale:1,
          opacity:1
        }}

        exit={{
          scale:0.85,
          opacity:0
        }}


        transition={{
          duration:0.25
        }}


        src={image}

        alt="Povećani makeup rad"


        className="
          max-w-full
          max-h-[85vh]

          sm:max-w-[90vw]
          sm:max-h-[90vh]

          object-contain

          rounded-2xl

          shadow-2xl

          select-none
        "


        onClick={(e)=>e.stopPropagation()}

      />




      <button

        onClick={()=>setImage(null)}

        className="
          absolute

          top-5
          right-5

          sm:top-8
          sm:right-8

          text-white

          bg-black/30

          rounded-full

          p-3

          backdrop-blur-md

          hover:bg-black/50

          transition

        "

      >

        <X size={28}/>

      </button>



    </motion.div>,


    document.body

  );


}