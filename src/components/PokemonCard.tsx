import React from "react";
import star from "../assets/star.png";
import { motion } from "framer-motion";

interface CardProps {
  name: string;
  image: string;
  isWinner?: boolean; // Optional prop for winner status
  showResult: boolean;
}

const Card: React.FC<CardProps> = ({ name, image, showResult, isWinner }) => {
  return (
    <>
    <motion.div
    className="relative flex flex-col items-center"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      {/* Won/Lost Label (Positioned Above the Card) */}
     

      {/* Card Design */}
      <div className="relative flex flex-col items-center bg-amber-100 rounded-xl shadow-xl border-4 border-yellow-500 border-opacity-70 w-64 h-80">
        {/* Pokémon Image */}
        <div
        className={`absolute top-[-20px] px-3 py-1 text-black font-bold rounded bg-white border-4 border-gray-900`}
      >
        {name}
      </div>


        <img src={image} alt={name} className="h-full w-full object-cover rounded-lg" />

        {/* Star Ratings */}
        <div className="absolute bottom-[-20px] flex gap-1 bg-white p-1 rounded-lg border-4 border-yellow-500">
          {[...Array(4)].map((_, index) => (
            <img key={index} src={star} alt="Star" className="h-4 w-4" />
          ))}
        </div>
      </div>
    </motion.div>

{showResult && (
    <div
      className={`absolute bottom-52 px-4 py-2 text-white font-bold border-4 border-black rounded-lg shadow-lg 
      ${isWinner ? "bg-green-500" : "bg-red-500"}`}
    >
      {isWinner ? "WON" : "LOST"}
    </div>
  )}
    </>
  );
};

export default Card;
