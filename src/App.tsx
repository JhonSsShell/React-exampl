import React from "react"
// import Layout from "./layout/Layout"
import { Routes, Route, Link } from 'react-router-dom';
import logoGithub from './assets/logoGithub.svg'
import Formulario from "./formulario/components/Formulario";
import Home from "./Home/components/Home";
import ListaPokemon from "./lista/components/ListaPokemon";

function App() {
  return (
    <div className="w-screen h-screen bg-white font-ubuntu">
      <div className="w-full flex justify-center bg-blue-100">
        <header className="w-full max-w-5xl h-16">
          <nav className="my-0 mx-auto rounded-b-xl flex justify-between items-center w-full h-full">
            <div className="h-full w-16 flex items-center">
              <img
                src={logoGithub}
                alt="#"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/3">
              <ul className="w-full flex justify-around text-black font-bold">
                <li>
                  <Link to={'/'} className="px-3 py-2 hover:bg-blue-300 transition-all duration-100 rounded-lg">Inicio</Link>
                </li>
                <li>
                  <Link to={'/formulario'} className="px-3 py-2 hover:bg-blue-300 transition-all duration-100 rounded-lg">Formulario</Link>
                </li>
                <li>
                  <Link to={'/lista'} className="px-3 py-2 hover:bg-blue-300 transition-all duration-100 rounded-lg">Pokemones</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>  
      <Routes>
        <Route path="/formulario" element={<Formulario />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lista" element={<ListaPokemon />}></Route>
      </Routes>
    </div>
  );
}

export default App
