import React, { useEffect } from 'react';
import Card from './Card';
import './style/Projects.css';
import './style/Transition.css';
import imagem from './images-projects/imagem-recipes-app.png';

function Projects() {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            console.log(entries);
            entries[0].target.classList.add('init-hidden-off'); // aplica o off no hidden
        }, {
            threshold: 0.5 // Controlla em que posição da imagem usa o efeito (0.5 === meio da imagem)
        });
        // observa os elementos na pagina e quando encontra aplica a função acima
        const elements = document.querySelectorAll('.individual-project.init-hidden'); 
        elements.forEach(element => {
            observer.observe(element);
        });

        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []); 

    const githubLink = 'https://github.com/ebionarduche/App-De-Receitas-Mobile';
    const liveRecipesApp = 'https://app-de-receitas-psi.vercel.app/';

    return (
        <div className="project-container">
            <h1>PROJETOS</h1>
            <div className="individual-project init-hidden">
                <img src={imagem} alt="imagem" className="project-img"/>
                <Card 
                    projectName='Recipes App' 
                    subTitle='Front-end'
                    description='Receitas App é um aplicativo mobile que permite acessar uma ampla variedade de receitas,
                    incluindo refeições e drinks. Com ele, você pode pesquisar por nome de alimentos e nome de receitas.'
                    skills={['JavaScript', 'React', 'CSS', 'BrowserRouter', 'ContextAPI','RTL', 'Redux', 'Bootstrap' ]}  
                    Rlink={githubLink}
                    Plink={liveRecipesApp}     
                />
            </div>

            <div className="individual-project init-hidden">
                <img src={imagem} alt="imagem" className="project-img"/>
                <Card 
                    projectName='Table Futebol Club' 
                    subTitle='Back-end'
                    description='O TFC é um site informativo sobre partidas e classificações de futebol.
                    Este projeto inclui uma API desenvolvida em Node.js que permite criar, editar,
                    excluir e selecionar partidas.'
                    skills={['TypeScript', 'NodeJs', 'POO', 'Sequelize', 'MySql','RTL', 'Sinon', 'Mocka', 'Docker', 'JWT' ]}
                    Rlink={githubLink}     
                />
            </div>

            <div className="individual-project init-hidden">
                <img src={imagem} alt="imagem" className="project-img"/>
                <Card 
                    projectName='Recipes App' 
                    description='Receitas App é um aplicativo mobile que permite acessar uma ampla variedade de receitas,
                    refeições e drinks. Com ele, você pode pesquisar por nome de alimentos e nome de receitas.'
                    skills={['JavaScript', 'React', 'CSS', 'BrowserRouter', 'ContextAPI','RTL', 'Redux', 'Bootstrap' ]}
                    Rlink={githubLink}     
                />
            </div>
        </div>
    );}

export default Projects;