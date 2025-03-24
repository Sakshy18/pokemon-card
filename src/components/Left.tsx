import React from "react";
import backgroundLeft from "../assets/forest_bg.jpg";
import Card from "./PokemonCard";

const Left: React.FC<{ showResult: boolean; pokemon: any ; scores:any}> = ({ showResult, pokemon,scores }) => {
  return (
    <div
      className="flex items-center justify-center w-1/2 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundLeft})` }}
    >
      <Card name={pokemon.name} image={pokemon.imageUrl} showResult={showResult} scores={scores} isLeft={true} />
    </div>
  );
};

export default Left;
