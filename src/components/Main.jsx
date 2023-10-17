import React from 'react';
import './Main.css';
import GitHubSVG from './icons/GitHub';
import LinkedinSVG from './icons/Linkedin';
import Curriculum from './icons/Curriculum';



const Header = () => {
    return (
        <head>
            <div className='introduction'>
                <section className='content'>
                    <div className='title'>
                        <p>Olá, me chamo Ebio!</p>
                        <h1>Desenvolvedor Full-Stack</h1>
                    </div>
                    <div className='about-me'>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas facere optio possimus!
                        Nihil obcaecati mollitia nam, fuga aliquid, esse modi voluptatum ullam nemo, voluptatem eos
                        deleniti iste officia maxime?
                        </p>
                    </div>
                    <div className='header-social-icons'>
                        <GitHubSVG />
                        <LinkedinSVG />
                        <Curriculum />
                    </div>
                </section>
            </div>
        </head>
    );
};

export default Header;