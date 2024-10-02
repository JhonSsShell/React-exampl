import PokemonProps from "../interface/PokemonProps";
import React, { useEffect, useState } from "react";

const Pokemones = () => {
    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
    const [loadPokemons, setLoadPokemons] = useState<boolean>(false); // Estado para activar la carga
    const [loading, setLoading] = useState<boolean>(false); // Estado para manejar la carga

    const getPokemons = () => {
        setLoading(true); // Cambia el estado a "cargando"
        fetch(`https://pokeapi.co/api/v2/pokedex`)
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data.results); // Establece el estado con los resultados
                setLoading(false); // Cambia el estado de carga a "falso"
            })
            .catch((error) => {
                console.log(`Error en ${error}`);
                setLoading(false); // Cambia el estado de carga a "falso" incluso si hay un error
            });
    };

    useEffect(() => {
        if (loadPokemons) {
            getPokemons(); // Llama a getPokemons solo si loadPokemons es verdadero
            setLoadPokemons(false); // Reinicia el estado después de la carga
        }
    }, [loadPokemons]); // Dependencia de loadPokemons

    const handleClick = () => {
        setLoadPokemons(true); // Cambia el estado para activar la carga
    };

    return (
        <div className="w-full flex justify-center">
            <div className="max-w-2xl">
                <h1 className="font-bold text-2xl font-ubuntu">Cargar pokedex</h1>
                <button onClick={handleClick} disabled={loading} className="btn">
                    {loading ? "Cargando..." : "Cargar Pokémons"}
                </button>
                <ul>
                    {pokemons.map((pokemon, index) => (
                        <li key={index}>{pokemon.name}</li> // Muestra los nombres de los pokémon
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Pokemones;
