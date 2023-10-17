import React from 'react';
import './style/About.css';
import technologies from './technologies';

function About() {
    return(
        <div className="about">
            <h1>Sobre mim</h1>
            <p>
        Aqui você encontrará mais informações sobre mim,<br />
        o que faço e minhas habilidades atuais em programação e tecnologia.
            </p>
      
            <div className="about-header">
                <h2>Desenvolvedor Full-Stack</h2>
                <h2>Ferramentas e Tecnologias</h2>
            </div>
            <div className="about-container">
                <section className="about-me">
                    <p>
                        <strong>Sou um desenvolvedor web full-stack</strong> em formação na Trybe,
      em busca de minha primeira oportunidade no mercado.<br />
                        <strong> Tenho me especializado em tecnologias tanto para o front-end,
      como JavaScript, React, Redux, Context API, CSS e HTML,
      quanto para o back-end, como TypeScript, Node.js, Express.js,
      MySQL, Sequelize e Docker. Possuo experiência em Jest e RTL para testes,
      bem como Sinon, Mocha e Chai para testes de back-end.</strong><br />
      Durante meus estudos, tenho trabalhado para aprimorar minhas habilidades nessas áreas.
                        <strong> Estou ansioso com a possibilidade de colaborar em projetos desafiadores
      e continuar aprendendo com profissionais experientes.</strong>
      Meu objetivo é crescer profissionalmente no campo do <strong>desenvolvimento web.</strong>
                    </p>
                </section>
                <div className="technologies">
                    {
                        technologies.map(({technology, image}) => (
                            <div>
                                <img src={image} alt={technology} width='65px' />
                                <p>{technology}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;