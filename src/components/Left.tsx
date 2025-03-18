import React from "react";

import backgroundLeft from "../assets/forest_bg.jpg"; 
import Card from "./PokemonCard";

const Left: React.FC<{ showResult: boolean , image : string}> = ({ showResult,image }) => {
    return (
      <div
        className="flex flex-col items-center justify-center w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundLeft})` }}
      >
      
        <Card name="Charizard" image={image} showResult={showResult} isWinner={false} />
       
      </div>
    );
  };

export default Left;
