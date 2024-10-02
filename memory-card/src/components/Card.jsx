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

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function Card({ handleScore }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonCardClicked, setPokemonCardClicked] = useState([]);

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

  function handleClick(pokemon) {
    if (pokemonCardClicked.includes(pokemon.id)) {
      handleScore(false); // Game over, reset score
      setPokemonCardClicked([]); // Reset the game
    } else {
      handleScore(true); // Increment score
      setPokemonCardClicked([...pokemonCardClicked, pokemon.id]);
      setPokemonData(prevData => shuffle([...prevData]));
    }
  }

  return (
    <div className="pokemon-container">
      {pokemonData.map(pokemon => (
        <div 
          key={pokemon.id} 
          className="pokemon-card" 
          onClick={() => handleClick(pokemon)}
        >
          <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
}

export default Card;
