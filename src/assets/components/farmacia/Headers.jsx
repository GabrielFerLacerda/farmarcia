import React from 'react';
import Logo from './Logo';
import './navbar.css';

function Headeres() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Logo />
        <span className="logo-text">Farmácia</span>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="O que você deseja encontrar?" />
        <i className="fas fa-search search-icon"></i>
      </div>

      <div className="navbar-links">
       <button className='navbar-links'>Categoria</button>
       <button>Menu</button>
       <button>Cadastrar</button>
      </div>
    </nav>
  );
}

export default Headeres;
