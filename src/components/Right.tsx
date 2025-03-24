import React from "react";
import backgroundRight from "../assets/sky_bg.jpg";
import Card from "./PokemonCard";

const Right: React.FC<{ showResult: boolean; pokemon: any ;isWinner: boolean}> = ({ showResult, pokemon ,isWinner}) => {
  return (
    <div
      className="flex items-center justify-center w-1/2 h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundRight})` }}
    >
      <Card name={pokemon.name} image={pokemon.imageUrl} showResult={showResult} isWinner={isWinner} />
    </div>
  );
};

export default Right;
