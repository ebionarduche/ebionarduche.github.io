import React from 'react';
import './style/Main.css';
import GitHubSVG from './icons/GitHub';
import LinkedinSVG from './icons/Linkedin';
import Curriculum from './icons/Curriculum';



function Main() {
    return (
        <div id='home' className='main-container'>
            <section className='content'>
                <div className='title'>
                    <div className='social-icons-container'>
                        <span>  {'\u{1F44B}'} Olá, me chamo Ebio Narduche</span>
                        <GitHubSVG />
                        <LinkedinSVG />
                        <Curriculum />
                    </div>
                    <h1>Desenvolvedor Full-Stack</h1>
                </div>
                <div className='intro-container'>
                    <span>
                    Bem-vindo ao meu portfólio! Aqui você conhecerá melhor minha jornada como desenvolvedor web full stack,
                    minhas habilidades em diversas tecnologias e meus projetos. Explore e confira o que construí até agora.
                    </span>
                </div>
                <button type="button">PROJETOS</button>
                <div className='mouse'></div>
            </section>
        </div>
    );
}

export default Main;