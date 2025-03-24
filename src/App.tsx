import React, { useState, useEffect } from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import { getPokemons } from "./api-service/api";
import Logo from "./components/Logo";
import Button from "./components/Button";
import './index.css';
import { determineWinner } from "./utils/determineWinner";
import { FaSyncAlt } from "react-icons/fa"; 


const App: React.FC = () => {
  const [selectedPokemons, setSelectedPokemons] = useState<any[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [scores, setScores] = useState<{ finalScore1: number; finalScore2: number } | null>(null);

  const fetchData = async () => {
    const data = await getPokemons();
    if (data.length >= 2) {
      const shuffled = [...data].sort(() => Math.random() - 0.5);
      const pokemon1 = shuffled[0];
      const pokemon2 = shuffled[1];

      const initialScores = determineWinner(pokemon1, pokemon2);
      setSelectedPokemons([pokemon1, pokemon2]);
      setScores({ finalScore1: initialScores.finalScore1, finalScore2: initialScores.finalScore2 });

      setShowResult(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  const handlePlayNow = () => {
    if (selectedPokemons.length < 2) return;

    const result = determineWinner(selectedPokemons[0], selectedPokemons[1]);
    setScores({ finalScore1: result.finalScore1, finalScore2: result.finalScore2 });
    setShowResult(true);
    console.log(scores);
  };

  return (
    <div className="relative flex flex-col items-center w-screen h-screen">
  
      <Logo />


      <div className="flex flex-grow w-full">
        {selectedPokemons.length === 2 ? (
          <>
            <Left showResult={showResult} pokemon={selectedPokemons[0]}   scores={scores}  />
            <Right showResult={showResult} pokemon={selectedPokemons[1]}  scores={scores}  />
          </>
        ) : (
          <p className="text-xl text-gray-600 absolute top-1/2">Loading Pokémon...</p>
        )}
      </div>

      <div className="absolute bottom-10 flex gap-4">
    
        <Button text="PLAY NOW" color="blue" onClick={handlePlayNow} />
        <button
          onClick={fetchData}
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg text-lg font-semibold border-4 border-black shadow-lg flex items-center gap-2"
        >
          <FaSyncAlt /> Refresh
        </button>
      </div>
   
    
    </div>
  );
};

export default App;
