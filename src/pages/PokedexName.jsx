import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const PokedexName = () => {

    const { name } = useParams()

    const url = `http://pokeapi.co/api/v2/pokemon/${name}`
    const [ pokemon, getPokemonbyName, hasError] = useFetch(url)

    useEffect(() => {
        getPokemonbyName()

    },[name])

    return (
        <>
        <div>{name}</div>
        {
            hasError
            ?  <h1>😢 the pokemon "<span>{name}</span>'doesn't exist'</h1> 
            : (
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            )
        }
        
        </>
    )
}

export default PokedexName