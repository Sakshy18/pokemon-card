import axios from 'axios';

const API_URL = 'http://localhost:5000'; // ✅ Your backend URL

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${API_URL}/pokemon`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    return [];
  }
};
