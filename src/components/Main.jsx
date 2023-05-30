import React, { Component } from 'react';
import './Main.css';
import fotoPerfil from '../fotoPerfil.png';

class Main extends Component {
    render() {
        return(
            <div className='Main'>
                <img className='perfil-img' src={fotoPerfil} alt="" />
            </div>
        );
    }
}

export default Main;
