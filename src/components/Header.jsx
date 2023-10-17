import React from 'react';
import './style/Header.css';
import PerfilFoto from './images-header/PerfilFoto.png';
import About from './About';
import Projects from './Projects';

function Header() {
    return(
        <head className="header-container">
            <div className="perfil-container">   
                <img src={PerfilFoto} alt="" width='65px' />
                <h1>EBIO NARDUCHE</h1>
            </div>
            <nav className="navigation-container">
                <a href="home">INICIO</a>
                <a href={About}>SOBRE</a>
                <a href={Projects}>PROJETOS</a>
                <a href={Projects}>CONTATO</a>
            </nav>
        </head>
    );
}

export default Header;