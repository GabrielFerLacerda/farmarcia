import { useState } from 'react';
import './App.css';
import Headers from './assets/components/farmacia/Headers';
import Body from './assets/components/farmacia/Body';
import Produto from './assets/components/farmacia/Produto';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [pagina, setPagina] = useState(<Headers />); 

  return (
    <>
      <Headers />
      <nav>
        <button classname="buttao" onClick={() => { setPagina(<Body />) }}>Inicio</button>
        <button classname="buttao" onClick={() => { setPagina(<Produto />) }}>Produtos</button>
      </nav>
      <div>{pagina}</div> 
    </>
  )
}

export default App;
