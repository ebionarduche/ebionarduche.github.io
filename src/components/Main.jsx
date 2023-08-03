import React from 'react';
import './Main.css';
import GitHubSVG from './icons/GitHub';
import LinkedinSVG from './icons/Linkedin';
import fotoPerfil from '../fotoPerfil.png';
import Curriculum from './icons/Curriculum';



const Main = () => {
    return (
        <main>
            <section className='title'>
                <div className='first-title'>
                    <h1>Full Stack</h1>
                    <div className='header-social-icons'>
                        <GitHubSVG />
                        <LinkedinSVG />
                        <Curriculum />
                    </div>
                </div>
                <h1>developer</h1>
            </section>
            <img className='perfil-img' src={fotoPerfil} alt="" />
        </main>
    );
};

export default Main;