
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Pokedex from './pages/Pokedex'
import ProtectedRoutes from './pages/ProtectedRoutes'
import PokedexName from './pages/PokedexName'

function App() {
  

  return (
    <>
    <div>    
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route element={<ProtectedRoutes />}/>
          <Route path='/pokedex' element={<Pokedex/>}/>
          <Route path='/pokedex/:name' element={<PokedexName />}/>
    </Routes>
    </div>
    </>
  )
}

export default App
