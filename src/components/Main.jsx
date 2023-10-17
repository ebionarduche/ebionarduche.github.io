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
                        <span>Olá, me chamo Ebio Narduche</span>
                        <GitHubSVG />
                        <LinkedinSVG />
                        <Curriculum />
                    </div>
                    <h1>Desenvolvedor Full-Stack</h1>
                </div>
                <div className='intro-container'>
                    <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas facere optio possimus!
                        Nihil obcaecati mollitia nam, fuga aliquid, esse modi voluptatum ullam nemo, voluptatem eos
                        deleniti iste officia maxime?
                    </span>
                </div>
                <button type="button">PROJETOS</button>
                <div className='mouse'></div>
            </section>
        </div>
    );
}

export default Main;