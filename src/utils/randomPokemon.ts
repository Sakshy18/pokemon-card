const getRandomPokemonImages = (): { leftImage: string; rightImage: string } => {
    const totalImages = 13; // Total number of images in assets/pokemon
    const randomIndexes = new Set<number>();
  
    // Ensure we get two different random indexes
    while (randomIndexes.size < 2) {
      randomIndexes.add(Math.floor(Math.random() * totalImages) + 1);
    }
  
    // Convert Set to Array
    const [leftIndex, rightIndex] = Array.from(randomIndexes);
  
    return {
      leftImage: `/src/assets/pokemon/poke${leftIndex}.jpeg`,
      rightImage: `/src/assets/pokemon/poke${rightIndex}.jpeg`,
    };
  };
  
  export default getRandomPokemonImages;
  