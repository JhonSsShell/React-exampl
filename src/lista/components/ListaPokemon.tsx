import { useEffect, useState } from "react";
import ListaProps from "../interface/ListaProps";

const ListaPokemon = () => {

    // Se retornara una lista de objetos, entonces de guarda en un arreglo
    const [pokemons, setPokemons] = useState<ListaProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // 
    useEffect(() => {
        const ajax = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`); 
                const data = await response.json();
                setPokemons(data.results);
            } catch (error) {
                setError("Error al cargar los pokemones");
            } finally {
                setLoading(false);
            }
        }
        ajax();
    }, [])


    if (loading) return <div><p className="font-bold text-green-500 text-xs font-ubuntu">Cargando ...</p></div>
    if (error) return <div><p className="font-bold text-red-500 text-xs font-ubuntu">{error}</p></div>

    return (
        <div className="font-ubuntu w-full flex flex-col gap-4 justify-center my-12 max-w-full h-96">
            <div className="w-full flex justify-center">
                <h1 className="font-bold font-ubuntu text-2xl">
                    Lista de pokemones
                </h1>
            </div>
            <div className="w-full flex overflow-x-hidden justify-center">
                <table className="table table-zebra table-xs w-3/5">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((pokemon) => (
                    <tr key={pokemon.name}>
                        <td>{pokemon.name}</td>
                        <td>{pokemon.url}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListaPokemon;