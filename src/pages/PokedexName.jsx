import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";


import Chart from '../Home/Chart'


const PokedexName = () => {

    const { name } = useParams()

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const [pokemon, getPokemonbyName, hasError] = useFetch(url)
    

    useEffect(() => {
        getPokemonbyName()

    }, [name])
        return (
        <>

            {
                hasError
                    ?   <div className="fail">
                            <h1 className="text_fail_pokemon">😢 the pokemon "<span className="searchNameFail">{name}</span>" doesn't exist'</h1>
                        </div>
                    : (
                        <article className="selector">
                            <div className="cardSearch">
                                <div className="imgcontain">
                                    <img className='img_pokemon_search' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                                </div>
                                <div className="boxNumber">
                                    <p className="number_Pokemon">#{pokemon?.id}</p>
                                </div>
                                <h2 className='name_pokemon_selector'>{name}</h2>
                                <div className="line"></div>
                                <ul className="pokemon_weight_height">
                                    <div className="div_1">
                                        <p className="wh">WEIGHT</p>
                                        <li className='weight'>{pokemon?.weight}</li>
                                    </div>
                                    <div className="div_1">
                                        <p className="wh">HEIGHT</p>
                                        <li className='height'>{pokemon?.height}</li>
                                    </div>
                                </ul>
                                <div className="datails">
                                    <div className="type">
                                        <p className='details_pokemon_type'>Type</p>
                                        {
                                            <ul className='type_pokemon'>
                                                {pokemon?.types?.map((typeInfo, index) => (
                                                    <li className='list_type' key={index}>{typeInfo.type.name}</li>
                                                ))}
                                            </ul>

                                        }
                                    </div>
                                    <div className="hability">
                                        <p className='details_pokemon_ability'>Ability</p>
                                        {
                                            <ul className='type_pokemon'>
                                                {pokemon?.abilities.map((abilityInfo, index) => (
                                                    <li className='list_ability' key={index}>{abilityInfo.ability.name}</li>
                                                ))}
                                            </ul>
                                        }
                                    </div>
                                </div>
                                
                                <div className="chart">
                                <p className="stack">STACK</p>
                                {pokemon && <Chart pokemon={pokemon} />}
                                </div>    
                                
                                <p className="stack">MOVES</p>    
                                <div className="moves">
                                
                                    {pokemon?.moves.map((movesInfo, index) => (
                                                    <li className='list_moves' key={index}>{movesInfo.move.name}</li>
                                    ))}
                                </div>                                                              
                            </div>                            
                        </article>
                    )
            }

        </>
    )
}
export default PokedexName