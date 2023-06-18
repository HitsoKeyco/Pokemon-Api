
import PokeCard from './PokeCard'

const PokeContainer = ({ pokemons }) => {


    return (
        <div className='contenedorCard'>
        {
            pokemons?.map(pokemon => (
                <PokeCard 
                    key={pokemon.url}
                    url={pokemon.url}
                />
            ))
        }
        </div>
        
    )
}

export default PokeContainer