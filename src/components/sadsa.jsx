import React, { Component } from 'react';
import './Header.css';
import Curriculum from './icons/Curriculum';
import GitHubSVG from './icons/GitHub';
import LinkedinSVG from './icons/Linkedin';
import fotoPerfil from '../fotoPerfil.png';


class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <div className='first-title'>
                    <h1>FULL STACK</h1>
                    <div className='header-social-icons'>
                        <LinkedinSVG />
                        <GitHubSVG />
                        <Curriculum />
                    </div>
                </div>
                <h1>DEVELOPER</h1>
                <div className='Main'>
                    <img className='perfil-img' src={fotoPerfil} alt="" />
                </div>
            </div>
        );
    }
}

export default Header;
