import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'


const PokeCard = ({url}) => {

  const [pokemon, getPokemonbyId] = useFetch(url)

  useEffect(() => {
    getPokemonbyId()
  }, [])
  
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.name}`)
  }
  
  return (
    <article className={`card_pokemon ${pokemon?.types[0].type.name}`} onClick={handleNavigate}>
      <div className="card_img">
        <img className='img_pokemon' src={pokemon?.sprites.other['official-artwork'].front_default}/>
      </div>
        <section className='description_pokemon'>
          <h3 className='name_pokemon'>{pokemon?.name}</h3>
          

          
          <ul className='type_pokemon'>
            {
              pokemon?.types.map(typeInfo=> (
                <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
              ))
            }
          </ul>
          
          <footer>
            <ul className='stack_pokemon'>
              {
                pokemon?.stats.map(statInfo => (
                  <li key={statInfo.stat.url} className='list_stack'>
                    <span className='stat_name'>{statInfo.stat.name}</span>
                    <span className='stat_base'>{statInfo.base_stat}</span>
                  </li>
                ))
              }
            </ul>
          </footer>
        </section>
    </article>
    
  )
}

export default PokeCard