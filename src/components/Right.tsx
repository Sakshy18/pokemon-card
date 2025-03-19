import React from "react";
import backgroundRight from "../assets/sky_bg.jpg"; 

import Card from "./PokemonCard";

const Right: React.FC<{ showResult: boolean,image : string }> = ({ showResult,image }) => {
  return (
    <div
      className="flex flex-col items-center justify-center w-1/2 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundRight})` }}
    >
      <Card name="Charizard" image={image}  showResult={showResult} isWinner={true} />
     
    </div>
  );
};

export default Right;
