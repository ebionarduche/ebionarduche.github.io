import React, { useState } from 'react';
import './style/Header.css';
import PerfilFoto from './images-header/PerfilFoto.png';
import lightMode from './images-header/light-mode.png';
import darkMode from './images-header/dark-mode.png';

function Header() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    

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
                {
                    theme === 'light' ? 
                        <img 
                            src={lightMode} 
                            alt="" 
                            width='50px' 
                            onClick={toggleTheme}
                        /> :
                        <img 
                            src={darkMode} 
                            alt="" 
                            width='42px' 
                            onClick={toggleTheme}
                        />
                }
            </nav>
        </head>
    );
}

export default Header;