import React from 'react';
import './Header.css';
import GitHubSVG from './icons/GitHub';
import LinkedinSVG from './icons/Linkedin';
import fotoPerfil from '../fotoPerfil.png';
import Curriculum from './icons/Curriculum';



const Header = () => {
    return (
        <head>
            <section className='header-top'>
                <h2>Ebio Narduche</h2>
                <nav>
                    <a href="">HOME</a>
                    <a href="">PROJETOS</a>
                    <a href="">TECNOLOGIAS</a>
                    <a href="">CONTATO</a>
                </nav>
            </section>
            <div className='introduction'>
                <section className='content'>
                    <div className='title'>
                        <p>Olá, me chamo Ebio e sou um</p>
                        <h1>Desenvolvedor Full-Stack</h1>
                    </div>
                    <div className='about-me'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas facere optio possimus! Nihil obcaecati mollitia nam, fuga aliquid, esse modi voluptatum ullam nemo, voluptatem eos deleniti iste officia maxime?</p>
                    </div>
                    <div className='header-social-icons'>
                        <GitHubSVG />
                        <LinkedinSVG />
                        <Curriculum />
                    </div>
                </section>
                <img className='perfil-img' src={fotoPerfil} alt="" />
            </div>
        </head>
    );
};

export default Header;