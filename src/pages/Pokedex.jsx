import { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'
import {useSelector} from 'react-redux'
import PokeContainer from '../Home/PokeContainer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Pokedex = () => {

  const [selectValue, setSelectValue] = useState('all-pokemons')
  const trainerName = useSelector(states => states.trainerName)

  let url = 'https://pokeapi.co/api/v2/pokemon?limit=1289&offset=0'
  
  
  const [pokemons, getAllPokemons, hasError, setPokemons] = useFetch(url)

  const urlTypes = 'https://pokeapi.co/api/v2/type'
  const [types, getAllTypes] = useFetch(urlTypes)
  
  useEffect(() => {
    if(selectValue === 'all-pokemons'){
      getAllPokemons()
    }else{
      axios.get(selectValue)
      .then(res => {
        const data = {
          results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
        }
        setPokemons(data)        
      })
      .catch(err => console.log(err))
    }
  },[selectValue])
  
  useEffect(() => {    
    getAllTypes()
  }, [])
  
    const searchPokemon = useRef()
    const navigate = useNavigate()

    const handleSubmit = e => {
      e.preventDefault()
      const inputValue = searchPokemon.current.value.trim().toLowerCase()
      navigate(`/pokedex/${inputValue}`)
    }

    const handleChangeType = e => {
      setSelectValue(e.target.value)
    }

  return (
    <>
    <img className='headerpokedex'src="headerpokedex.svg" alt="" />
    
    <div className="main">

      <p className='introwelcome'> Welcome <span className='nameUser'>{trainerName}</span> , you cant find your favorite pokemon..!! </p>

      <form onClick={handleSubmit} className='formpokedex'>
        
          <div className="item-accion">
            <input className='inputpokedex' ref={searchPokemon} type="text" />
            <button className='buttonpokedex'>Search</button>

            <select onChange={handleChangeType}>
              <option value="all-pokemons">All pokemon</option>

                {
                  types?.results.map(typeInfo => (
                    <option value={typeInfo.url} key={typeInfo.url}> {typeInfo.name} </option>
                  ))
                }
            </select>
          </div>
        
      </form>
      </div>
    <div className="contpokecard">
    <PokeContainer pokemons={pokemons?.results} />
    </div>
    
    </>
  )
}

export default Pokedex