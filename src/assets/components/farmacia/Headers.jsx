import React from 'react';
import './headers.css';
import Logo from './Logo';
import App from '../../../App';
import Body from "./Body"
import Produto from './Produto';

const Headers = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <Logo />
                <h1>FARMÁCIA</h1>
            </div>
            <input type="text" className="search-bar" placeholder="  Pesquise seu produto" />
            <div className="buttons">
                <button  onClick={() => { setPagina(<Body />) }}>Inicio</button>
                <button  onClick={() => { setPagina(<Produto />) }}>Produtos</button>
                <button onClick={() => handleButtonClick('Sobre Nós')}>Sobre Nós</button>
                <button onClick={() => handleButtonClick('Contato')}>Contato</button>
            </div>
        </div>
    )
}

export default Headers;
