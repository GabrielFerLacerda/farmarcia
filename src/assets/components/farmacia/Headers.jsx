import React from 'react';
import './Navbar.css';
import Logo from './Logo';

const Headers = () => {
    const handleButtonClick = (section) => {
        console.log(`Navegando para ${section}`);
        // Adicione a lógica para navegar entre seções se necessário
    }

    return (
        <div className="navbar">
            <div className="logo">
                <Logo />
                <h1>FARMÁCIA</h1>
            </div>
            <input type="text" className="search-bar" placeholder="  Pesquise seu produto" />
            <div className="buttons">
                <button onClick={() => handleButtonClick('Início')}>Início</button>
                <button onClick={() => handleButtonClick('Produtos')}>Produtos</button>
                <button onClick={() => handleButtonClick('Sobre Nós')}>Sobre Nós</button>
                <button onClick={() => handleButtonClick('Contato')}>Contato</button>
            </div>
        </div>
    );
}

export default Headers;
