const typeAdvantages: Record<string, string[]> = {
  Water: ["Fire", "Rock", "Ground"],
  Fire: ["Grass", "Bug", "Ice"],
  Electric: ["Water", "Flying"],
  Grass: ["Water", "Rock", "Ground"],
  Psychic: ["Fighting", "Poison"],
  Steel: ["Ice", "Rock", "Fairy"],
  Ghost: ["Psychic", "Ghost"],
};

export const determineWinner = (pokemon1: any, pokemon2: any) => {
  const getScore = (pokemon: any) =>
    (pokemon.attack || 0) + (pokemon.defense || 0) + (pokemon.speed || 0);

  const calculateFinalScore = (pokemon: any) => {
    const baseScore = getScore(pokemon);
    const hp = pokemon.hp || 0;
    let scoreBoost = hp * 0.1; 

   
    if (typeAdvantages[pokemon.type]) {
      scoreBoost += 20;
    }

    return baseScore + scoreBoost;
  };

  const finalScore1 = calculateFinalScore(pokemon1);
  const finalScore2 = calculateFinalScore(pokemon2);

  let winner = 0;
  if (finalScore2 > finalScore1) {
    winner = 1;
  } else if (finalScore1 === finalScore2) {
    winner = Math.random() < 0.5 ? 0 : 1;
  }

  return { winner, finalScore1, finalScore2 };
};
