import React from 'react';
import './Header.css';
import GitHubSVG from './icons/GitHub';
import LinkedinSVG from './icons/Linkedin';
// import fotoPerfil from '../fotoPerfil.png';
import Curriculum from './icons/Curriculum';



const Header = () => {
  
    return (
        <header>
            <div className='first-title'>
                <h1>Full Stack</h1>
                <div className='header-social-icons'>
                    <GitHubSVG />
                    <LinkedinSVG />
                    <Curriculum />
                </div>
            </div>
        </header>
    );
};

export default Header;