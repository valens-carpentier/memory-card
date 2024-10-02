export default async function fetchPokemonData(pokemonName) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data for ${pokemonName}:`, error);
      return {
        id: Math.random(),
        name: pokemonName,
      };
    }
  }

console.log(fetchPokemonData('pikachu'));