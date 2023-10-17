import React from 'react';
import './style/Header.css';
import PerfilFoto from './images-header/PerfilFoto.png';

function Header() {
    
    return(
        <head className="header-container">
            <div className="perfil-container">   
                <img src={PerfilFoto} alt="" width='65px' />
                <h1>EBIO NARDUCHE</h1>
            </div>
            <nav className="navigation-container">
                <a href="#home">INÍCIO</a>
                <a href="#about" >SOBRE</a>
                <a href="#projects">PROJETOS</a> 
                <a href='#contact'>CONTATO</a>
            </nav>
        </head>
    );
}

export default Header;