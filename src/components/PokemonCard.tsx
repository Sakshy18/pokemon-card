import React from "react";
import star from "../assets/star.png";
import { motion } from "framer-motion";

interface CardProps {
  name: string;
  image: string;
  showResult: boolean;
  scores: { finalScore1: number; finalScore2: number } | null;
  isLeft?: boolean;
}

const getStarCount = (score: number) => {
  if (score > 250) return 5;
  if (score > 170) return 4;
  if (score > 110) return 3;
  if (score > 80) return 2;
  return 1;
};

const Card: React.FC<CardProps> = ({ name, image, showResult, scores, isLeft }) => {
  const finalScore = scores ? (isLeft ? scores.finalScore1 : scores.finalScore2) : 0;
  const starCount = getStarCount(finalScore);


  const isWinner = scores ? finalScore === Math.max(scores.finalScore1, scores.finalScore2) : false;

  return (
    <motion.div
      className="relative flex flex-col items-center"
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      {/* Won/Lost Label */}
      {showResult && (
        <div
          className={`absolute top-[-80px] px-4 py-2 text-white font-bold border-4 border-black rounded-lg shadow-lg 
          ${isWinner ? "bg-green-500" : "bg-red-500"}`}
        >
          {isWinner ? "WON" : "LOST"}
        </div>
      )}

      {/* Pokémon Card */}
      <div className="relative flex flex-col items-center bg-white rounded-2xl shadow-xl border-4 border-yellow-500 w-64 h-80">
        {/* Pokémon Name */}
        <div className="absolute top-[-20px] px-3 py-1 text-black font-bold rounded bg-white border-4 border-gray-900">
          {name}
        </div>

        {/* Pokémon Image */}
        <img src={image} alt={name} className="h-full w-full object-cover rounded-lg" />

    
        <div className="absolute bottom-[-20px] flex gap-1 bg-white p-1 rounded-lg border-4 border-yellow-500">
          {[...Array(starCount)].map((_, index) => (
            <img key={index} src={star} alt="Star" className="h-4 w-4" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
