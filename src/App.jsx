import { useState } from 'react';
import './App.css';
import Body from './assets/components/farmacia/Body';
import Produto from './assets/components/farmacia/Produto';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from './assets/components/farmacia/Logo'

function App() {
  const [pagina, setPagina] = useState(<Body/>); 

  return (
    <>
        <div className="navbar">
            <div className="logo">
                <Logo />
                <h1>FARMÁCIA</h1>
            </div>

            <input type="text" className="search-bar" placeholder="  Pesquise seu produto" />
            <div className="buttons">
                <button  onClick={() => { setPagina(<Body />) }}>Convite</button>
                <button  onClick={() => { setPagina(<Produto />) }}>Produtos</button>
                <button onClick={() => handleButtonClick('Sobre Nós')}>Sobre Nós</button>
                <button onClick={() => handleButtonClick('Contato')}>Contato</button>
            </div>

        </div>

        <div>{pagina}</div> 
    </>
  )
}

export default App;
