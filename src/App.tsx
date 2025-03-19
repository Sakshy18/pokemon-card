import React, { useEffect, useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import Logo from "./components/Logo";
import Button from "./components/Button";
import getRandomPokemonImages from "./utils/randomPokemon";

const App: React.FC = () => {
  const [pokemonImages, setPokemonImages] = useState({
    leftImage: "",
    rightImage: "",
  });

  useEffect(() => {
    setPokemonImages(getRandomPokemonImages());
  }, []);
  
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-screen h-screen">
      <Logo />
      <div className="flex flex-grow w-full">
        <Left showResult={showResult} image={pokemonImages.leftImage} />
        <Right showResult={showResult} image={pokemonImages.rightImage} />
      </div>
      <div className="absolute bottom-4">
        <Button text="PLAY NOW" color="blue" onClick={() => setShowResult(true)} />
      </div>
    </div>
  );
};

export default App;
