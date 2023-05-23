import React, { Component } from 'react';
import './Main.css';
import fotoPerfil from '../imagens/fotoPerfil.png';

class Main extends Component {
    render() {
        return(
            <div className='Main'>
                <h1>Sobre</h1>
                <img className='perfil-img' src={fotoPerfil} alt="" />
            </div>
        );
    }
}

export default Main;
