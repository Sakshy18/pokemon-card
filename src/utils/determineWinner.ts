export const determineWinner = (pokemon1: any, pokemon2: any): number => {
    // Function to calculate the Pokémon's total power score
    const getScore = (pokemon: any) => 
      (pokemon.attack || 0) + (pokemon.defense || 0) + (pokemon.speed || 0);
  
    const score1 = getScore(pokemon1);
    const score2 = getScore(pokemon2);
  
    // Determine winner based on scores
    if (score1 > score2) {
      return 0; // First Pokémon wins
    } else if (score2 > score1) {
      return 1; // Second Pokémon wins
    } else {
      return Math.random() < 0.5 ? 0 : 1; // Random tie-breaker
    }
  };
  