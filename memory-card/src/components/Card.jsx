import { useEffect, useState } from 'react';
import fetchPokemonData from './fetchPokemonData.js';
import './Card.css';

const pokemonArray = [
  { name: "Pikachu" },
  { name: "Charizard" },
  { name: "Bulbasaur" },
  { name: "Squirtle" },
  { name: "Jigglypuff" },
  { name: "Meowth" },
  { name: "Gengar" },
  { name: "Gyarados" },
  { name: "Dragonite" },
  { name: "Mewtwo" },
  { name: "Eevee" },
  { name: "Snorlax" },
  { name: "Lapras" },
  { name: "Vaporeon" },
  { name: "Flareon" },
  { name: "Jolteon" },
  { name: "Articuno" },
  { name: "Zapdos" },
  { name: "Moltres" },
  { name: "Mew" },
  { name: "Charmander" },
  { name: "Wartortle" },
  { name: "Venusaur" },
  { name: "Pidgeot" },
  { name: "Arcanine" },
  { name: "Alakazam" },
  { name: "Machamp" },
  { name: "Golem" },
  { name: "Rapidash" },
  { name: "Slowbro" }
];

function Card() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const dataPromises = pokemonArray.map(pokemon => fetchPokemonData(pokemon.name));
        const results = await Promise.all(dataPromises);
        setPokemonData(results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchAllPokemon();
  }, []);

  return (
    <div className="pokemon-container">
      {pokemonData.map(pokemon => (
        <div key={pokemon.id} className="pokemon-card">
          <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
}

export default Card;
